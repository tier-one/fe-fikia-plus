/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import Table from "@/app/components/Table";
import Modal from "@/app/components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import fetchFunds from "@/lib/actions/get_fund/fetchFunds";
import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useRouter } from "next/navigation";
import deleteFund from "@/lib/actions/delete_fund/deleteFund";
import { IoIosWarning } from "react-icons/io";
import { TiEyeOutline } from 'react-icons/ti'
import Link from "next/link";

const inputFieldStylingProps = {
  container: {
    className: "flex flex-col space w-full px-8",
  },
  inputlabel: {
    className: "text-base text-gray-600 font-light",
  },
  input: {
    className:
      "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
  },
};

export default function Funds() {
  const router = useRouter()
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [funds, setFunds] = useState<any>([]);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fundId, setFundId] = useState<string>();

  const headers = ["No", "Fund name", "Unit Price", "NAV", "Fund type", "Fund symbol", "Actions"];

  const token = session?.user?.token;

  useEffect(() => {
    fetchAllFunds();
  }, [token])

  const fetchAllFunds = async () => {
    if (token) {
      setIsLoading(true);
      const response = await fetchFunds(token);
    
      setFunds(response.fund)

      setIsLoading(false);
    }
  }

  const handleEdit = (fundId: string) => {
    router.push(`/create-fund?id=${fundId}`)
  }

  const handleOpenDeleteModel = (fundId: string) => {
    setIsDeleteModelOpen(true);
    setFundId(fundId);
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModelOpen(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    const res = await deleteFund(token, fundId);

    setIsDeleting(false);
    setIsDeleteModelOpen(false);
    setFunds([]);

    await fetchAllFunds();
  }

  const fundDatas = funds?.map((fund: any, index: any) => (
    {
      "No": index,
      "Fund name": fund?.fund?.FundName,
      "Unit Price": fund?.balance?.fundBalance,
      "NAV": `$${0}`,
      "Fund type": fund?.fund?.FundType,
      "Fund symbol": fund?.fund?.FundSymbol,
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
                  handleEdit(fund?.fund?.id)
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
                  handleOpenDeleteModel(fund?.fund?.id)
                }
              }
            />
          </div>
          <div 
            className="text-[#00597feb] px-[1px] py-[2px] rounded-[5px]"
          >
            <Link
              href={`/dashboard/funds/${fund?.fund?.id}`}
            >
              <TiEyeOutline 
                className="w-[25px] h-[25px] cursor-pointer"
              />
            </Link>
          </div>
        </div>
      )
    }
  ));

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <Modal isOpen={isDeleteModelOpen} onClose={handleCloseDeleteModal} >
        <div className="flex flex-col justify-center items-center px-[10px]">
          <h1 className="flex font-[700] text-[20px] mt-[20px]">Delete Fund?</h1>
          <p className="flex text-[13px] mt-[10px]">Are you sure you want to delete this fund?</p>
          <p className="flex text-[13px]">you can't undo this action.</p>
          <div className="flex flex-col gap-[3px] bg-[#ffe8d9] p-[10px] w-[85%] border-l-2 border-l-[#ff441f] mt-[15px]">
            <h1 className="flex items-center gap-[5px] font-[700] text-[#5f271c]"><IoIosWarning />Warning</h1>
            <p className="flex text-[13px] text-[#ff441f] ml-[20px]">By deleting this fund, it will never be recovered again!</p>
          </div>
          <div className="flex flex-wrap items-center justify-center px-8 mt-[20px] mb-[20px] gap-[20px]">
            <Button onClick={handleCloseDeleteModal} styling='bg-[#617d98] text-[#fff] text-[13px] font-[600] py-[5px] px-[50px] mt-2  rounded-[45px] ' value='Cancel' isDisabled={false} />
            <Button isLoading={isDeleting} onClick={handleDelete} styling='bg-[#e12c38] text-[#fff] text-[13px] font-[600] py-[5px] px-8 mt-2 rounded-[45px] ' value='Delete fund' isDisabled={false} />
          </div>
        </div>
      </Modal>
      <div className=" flex flex-col justify-center lg:mx-[9rem]">
        <p className="text-[#475569] font-bold text-4xl py-4">Funds</p>
        <div className="flex flex-grow max-h-[66vh]">
          <Table
            headers={headers}
            data={fundDatas}
            isLoading={isLoading}
            title="Funds types"
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={2}
            changeIndex={3}
            itemsPerPage={7}
            idIndex={0}
            // isTableRowLink={true}
            displayButton={true}
          />
        </div>
      </div>
    </div>
  );
}
