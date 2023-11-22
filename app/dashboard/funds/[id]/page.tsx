/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/app/components/Card";
import Table from "@/app/components/Table";
import Settings from "@/app/components/Settings";
import Assets from "@/app/components/Assets";
import deleteFund from "@/lib/actions/delete_fund/deleteFund";
import { IoIosWarning } from "react-icons/io";
import { TiEyeOutline } from 'react-icons/ti';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import FundTopBar from "@/app/components/FundTopBar";
import NewTransactionModal from "@/app/components/NewTransactionModal"
import { useParams, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import fetchAssetsByFundId from "@/lib/actions/get-assets-by-fundId/getAssetsByFundId";
import fetchTransactions from "@/lib/actions/get-transactions/fetchTransactions";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import deleteTransaction from "@/lib/actions/delete_transaction/deleteTransaction";
import fetchTransactionById from "@/lib/actions/get_transactionById/fetchTransactionById";
import fetchClients from "@/lib/actions/get-all-clients/fetchAllClients";

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
const headers = [
  "Client name",
  "Transaction type",
  // "Debit(RWF)",
  "Credit",
  "Number of units",
  "status",
  // "Net asset value",
  "Date",
  "Actions"
];


const data = [
  {
    "Client name": "Marvin McKinney",
    "transaction type": "Redemption",
    "Debit(RWF)": "-",
    Credit: 50000,
    "Number of units": 50000,

    "Net asset value": 50000,
    Date: "12 May,2023",
  },

  {
    Client: "Jenny Wilson",
    "transaction type": "Contribution",
    "Debit(RWF)": 100000,
    Credit: 40000,
    "Number of units": 50300,
    "Net asset value": 50300,
    Date: "12 May,2023",
  },
];
export default function Dashboard() {
  const searchParams = useSearchParams();
  const fundId = useParams().id;
  const { data: session } = useSession();

  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("fund-transactions");
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [assets, setAssets] = useState<any>([]);
  const [transactionId, setTransactionId] = useState<string>();
  const [updateTransaction, setUpdateTransaction] = useState<any>()

  const token = session?.user?.token;

  useEffect(() => {
    // fetchAllAssetsById();
    getTransactions();
    getClients();
  }, [token])

  const getClients = async () => {
    if (token) {
      const res = await fetchClients(token);
      setClients(res);
    }
  }

  const fetchAllAssetsById = async () => {
    if (token) {
      setIsLoading(true);
      const response = await fetchAssetsByFundId(token, fundId);
    
      setAssets(response)

      setIsLoading(false);
    }
  }

  const getTransactions = async () => {
    if (token) {
      setIsLoading(true);

      const res = await fetchTransactions(token);
      setAllTransactions(res);

      setIsLoading(false);
    }
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const openNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }
  const closeNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);

    var currentUrl = window.location.href;
    var urlParts = currentUrl.split('?');

    if (urlParts.length >= 2) {
        var baseUrl = urlParts[0];

        window.history.pushState({}, '', baseUrl);
    }
  }

  const handleOpenDeleteModel = (assetId: string) => {
    setIsDeleteModelOpen(true);
    setTransactionId(assetId);
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModelOpen(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    const res = await deleteTransaction(token, transactionId);

    setIsDeleting(false);
    setIsDeleteModelOpen(false);
    setAssets([]);

    await getTransactions();
  }

  const getSingleTransaction = async (transId: string) => {
    const results = await fetchTransactionById(token, transId);
    
    setUpdateTransaction(results)
  }

  const handleEdit = (transactionId: string) => {
    openNewTransactionModal()
    var newUrl = window.location.href;

    newUrl += '?id=' + transactionId;

    window.history.pushState({path:newUrl}, '', newUrl);

    getSingleTransaction(transactionId)
  }


  const transactionsDatas = allTransactions?.map((transaction: any, index: any) => (
    {
      "Client name": transaction?.investorFullNames,
      "Transaction type": transaction?.transactionType,
      "Credit": transaction?.price,
      "Number of units": transaction?.amount,
      "status": transaction?.status,
      "Date": transaction?.createdAt.split('T')[0],
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
                  handleEdit(transaction?.id)
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
                  handleOpenDeleteModel(transaction?.id)
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
    <div className="bg-[#eaeaed] min-h-[87vh]">
      <Modal isOpen={isDeleteModelOpen} onClose={handleCloseDeleteModal} >
        <div className="flex flex-col justify-center items-center px-[10px]">
          <h1 className="flex font-[700] text-[20px] mt-[20px]">Delete Transaction?</h1>
          <p className="flex text-[13px] mt-[10px]">Are you sure you want to delete this transaction?</p>
          <p className="flex text-[13px]">you can't undo this action.</p>
          <div className="flex flex-col gap-[3px] bg-[#ffe8d9] p-[10px] w-[85%] border-l-2 border-l-[#ff441f] mt-[15px]">
            <h1 className="flex items-center gap-[5px] font-[700] text-[#5f271c]"><IoIosWarning />Warning</h1>
            <p className="flex text-[13px] text-[#ff441f] ml-[20px]">By deleting this transaction, it will never be recovered again!</p>
          </div>
          <div className="flex flex-wrap items-center justify-center px-8 mt-[20px] mb-[20px] gap-[20px]">
            <Button onClick={handleCloseDeleteModal} styling='bg-[#617d98] text-[#fff] text-[13px] font-[600] py-[5px] px-[50px] mt-2  rounded-[45px] ' value='Cancel' isDisabled={false} />
            <Button isLoading={isDeleting} onClick={handleDelete} styling='bg-[#e12c38] text-[#fff] text-[13px] font-[600] py-[5px] px-8 mt-2 rounded-[45px] ' value='Delete Asset' isDisabled={false} />
          </div>
        </div>
      </Modal>
      <div className="flex flex-col  lg:mx-[9rem] ">
        <div className="flex mt-3">
          <Link
            href="/dashboard/funds"
            className="mr-3 text-[#475569] font-semibold"
          >
            Funds
          </Link>
          <Image src="/more.svg" alt="more" width={8} height={13} />
          <span className="text-[#0EA4E8] font-bold ml-3">Unguka fund</span>
        </div>
        <div>
          <p className="text-[#475569] font-bold text-2xl py-4">Funds</p>
        </div>
        <div className="border-b border-gray-300 mb-4">
          <button
            className={`py-2 text-xl text-center border-b-2 font-medium text-[#475569] ${
              activeTab === "fund-transactions" ? "border-[#0EA4E8]" : ""
            } leading-5 focus:outline-none focus:border-[#0EA4E8]`}
            onClick={() => handleTabClick("fund-transactions")}
          >
            Fund transactions
          </button>
          <button
            className={`py-2 px-6 text-xl text-center border-b-2 font-medium text-[#475569] ${
              activeTab === "assets" ? "border-[#0EA4E8]" : ""
            } leading-5 focus:outline-none focus:border-[#0EA4E8]`}
            onClick={() => handleTabClick("assets")}
          >
            Assets
          </button>

          <button
            className="py-2 px-6 text-xl text-center border-b-2  font-medium  leading-5 text-[#475569] hover:border-[#0EA4E8] focus:outline-none  focus:border-[#0EA4E8]"
            onClick={() => handleTabClick("settings")}
          >
            Settings
          </button>
        </div>
        {activeTab === "fund-transactions" ? (
          <>
            <div className="flex-grow flex lg:justify-between flex-col lg:flex-row">
              <Card
                title="Total Clients"
                imageAlt="Total Clients"
                icon="/client.svg"
                change={3.3}
                changeIcon="/increase.svg"
                amount={clients?.length}
                period="last week"
                styles="lg:mr-3 mb-3"
              />
              <Card
                title="Cost per unit"
                imageAlt="Total funds"
                icon="/total-funds.svg"
                change={3.3}
                changeIcon="/increase.svg"
                amount={1500}
                period="last week"
                styles="lg:mr-3 mb-3"
              />
              <Card
                title="Total market Cap"
                imageAlt="Total market Cap"
                icon="/market-cap.svg"
                change={3.3}
                changeIcon="/increase.svg"
                amount={1500}
                period="last week"
                styles="lg:mr-3 mb-3"
              />
            </div>

            <div className="flex mb-20 flex-col flex-grow min-h-[48vh] bg-white p-5 rounded-[24px]">
              <div className="flex justify-between mx-8 py-4" >
                <p className="text-[#475569] font-semibold  text-3xl   w-1/4 py-2" >
                  Transactions
                </p>
                
                <FundTopBar
                  newTransactionName="New Transaction"
                  openFormOnclick={openNewTransactionModal}
                  exportOnclick={() => {}}
                  isButtonVisible={true}
                />
               
              </div>
              <Table
                headers={headers}
                data={transactionsDatas}
                isLoading={isLoading}
                title=""
                buttonText="Create fund"
                buttonStyling="bg-[#002674] text-white  rounded-lg"
                buttonOnClick={() => {}}
                marketCapIndex={2}
                // changeIndex={3}
                itemsPerPage={7}
                idIndex={0}
                displayButton={false}
              />
            </div>
          </>
        ) : activeTab === "assets" ? (
          <Assets />
        ) : (
          <Settings />
        )}
      </div>
      <NewTransactionModal 
        isModalOpen={isNewTransactionModalOpen} 
        closeModal={closeNewTransactionModal} 
        getTransactions={getTransactions}
        updateTransaction={updateTransaction}
      />
    </div>
  );
}
