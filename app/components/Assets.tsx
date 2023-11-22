/* eslint-disable react/no-unescaped-entities */
'use client';

import {useEffect, useState} from 'react'
import FundTopBar from "@/app/components/FundTopBar"
import Table from "@/app/components/Table"
import NewAssetModal from "@/app/components/NewTransactionModal"
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Modal from './Modal';
import Button from './Button';
import deleteAsset from '@/lib/actions/delete_asset/deleteAsset';
import { useSession } from 'next-auth/react';
import { IoIosWarning } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import fetchAssets from '@/lib/actions/get-all-assets/fetchAssets';
import fetchAssetsByFundId from '@/lib/actions/get-assets-by-fundId/getAssetsByFundId';
import { CiEdit } from 'react-icons/ci';


const headers = [
  "Asset name",
  "Price",
  "Asset value",
  "Outstanding Shares",
  "Net asset value",
  "Date",
  "Action",
];

const Assets = () => {
  const router = useRouter();
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNewAssetModalOpen, setIsNewAssetModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState<any>([]);
  const [assetId, setAssetId] = useState<string>();
  const fundId = useParams().id;
  const { data: session } = useSession();
  const token = session?.user?.token;

  useEffect(() => {
    fetchAllAssets();
  }, [token])
  
  const fetchAllAssets = async () => {
    if (token) {
      setIsLoading(true);
      const response = await fetchAssets(token);
    
      setAssets(response)
  
      setIsLoading(false);
    }
  }

  const handleOpenDeleteModel = (assetId: string) => {
    setIsDeleteModelOpen(true);
    setAssetId(assetId);
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModelOpen(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    const res = await deleteAsset(token, assetId);

    setIsDeleting(false);
    setIsDeleteModelOpen(false);
    setAssets([]);

    await fetchAllAssets();
  }

  const handleEdit = (assetId: string) => {
    router.push(`dashboard/assets/create-asset?id=${assetId}`)
  }

  const openNewAssetModal = () => {
    setIsNewAssetModalOpen(true);
  }
  const closeNewAssetModal = () => {
    setIsNewAssetModalOpen(false);
  }

  const AssetsDatas = assets?.map((asset: any, index: any) => (
    {
      "Asset name": asset?.name,
      "Price": asset?.price,
      "Asset value": asset?.value,
      "Outstanding Shares": asset?.equityDetails?.numberOfOutstandingShares,
      "Net asset value": 100,
      "Date": asset?.createdAt.split('T')[0],
      "Action": (
        <div 
          className="flex gap-[10px]"
        >
          <div 
            className="text-[#21b500dc] px-[1px] py-[2px] rounded-[5px]"
          >
            <CiEdit 
              className="w-[25px] h-[25px] cursor-pointer"
              onClick= {
                () => {
                  handleEdit(asset?.id)
                }
              }
            />
          </div>
          <div 
            className="text-[#ff717186] px-[1px] py-[2px] rounded-[5px]"
          >
            <MdDelete 
              className="w-[25px] h-[25px] cursor-pointer"
              onClick= {
                () => {
                  handleOpenDeleteModel(asset?.id)
                }
              }
            />
          </div>
          <div 
            className="text-[#00597feb] px-[1px] py-[2px] rounded-[5px]"
          >
            {/* <Link
              href={`/dashboard/funds/${fund?.fund?.id}`}
            >
              <TiEyeOutline 
                className="w-[25px] h-[25px] cursor-pointer"
              />
            </Link> */}
          </div>
        </div>
      )
    }
  ));

  return (
    <div className="min-h-[60h] bg-white rounded-xl mb-4">
      <Modal isOpen={isDeleteModelOpen} onClose={handleCloseDeleteModal} >
        <div className="flex flex-col justify-center items-center px-[10px]">
          <h1 className="flex font-[700] text-[20px] mt-[20px]">Delete Asset?</h1>
          <p className="flex text-[13px] mt-[10px]">Are you sure you want to delete this asset?</p>
          <p className="flex text-[13px]">you can't undo this action.</p>
          <div className="flex flex-col gap-[3px] bg-[#ffe8d9] p-[10px] w-[85%] border-l-2 border-l-[#ff441f] mt-[15px]">
            <h1 className="flex items-center gap-[5px] font-[700] text-[#5f271c]"><IoIosWarning />Warning</h1>
            <p className="flex text-[13px] text-[#ff441f] ml-[20px]">By deleting this asset, it will never be recovered again!</p>
          </div>
          <div className="flex flex-wrap items-center justify-center px-8 mt-[20px] mb-[20px] gap-[20px]">
            <Button onClick={handleCloseDeleteModal} styling='bg-[#617d98] text-[#fff] text-[13px] font-[600] py-[5px] px-[50px] mt-2  rounded-[45px] ' value='Cancel' isDisabled={false} />
            <Button isLoading={isDeleting} onClick={handleDelete} styling='bg-[#e12c38] text-[#fff] text-[13px] font-[600] py-[5px] px-8 mt-2 rounded-[45px] ' value='Delete Asset' isDisabled={false} />
          </div>
        </div>
      </Modal>
      <div className="flex justify-between mx-8 py-4 ">
        <p className="text-[#475569] font-semibold  text-3xl   w-1/4 py-2">
        Assets
        </p>
        <FundTopBar
          newTransactionName="New Asset"
          openFormOnclick={openNewAssetModal}
          exportOnclick={() => {}}
          fundId={fundId}
        />
      </div>
      <div className="flex flex-grow max-h-[48vh]">
          <Table
            headers={headers}
            data={AssetsDatas}
            isLoading={isLoading}
            title=""
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={1}
            changeIndex={3}
            itemsPerPage={7}
            idIndex={0}
            isTableRowLink={false}
            displayButton={false}
            displayMore={false}
          />
        </div>
        <NewAssetModal isModalOpen={isNewAssetModalOpen} closeModal={closeNewAssetModal} />
    </div>
  );
};

export default Assets;
