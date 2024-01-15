/* eslint-disable react/no-unescaped-entities */
'use client'

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Table from '../components/Table';
import Modal from "../components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import fetchFunds from "@/lib/actions/get_fund/fetchFunds";
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { IoIosWarning } from 'react-icons/io';
import { useRouter } from "next/navigation";
import deleteFund from "@/lib/actions/delete_fund/deleteFund";
import Link from "next/link";
import { TiEyeOutline } from "react-icons/ti";
import fetchSubs from "@/lib/actions/get-subscriptions/fetchSubs";
import fetchTransactions from "@/lib/actions/get-transactions/fetchTransactions";

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full px-8'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}



export default function Dashboard() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [funds, setFunds] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fundName, setFundName] = useState('');
  const [fundType, setFundType] = useState('');
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fundId, setFundId] = useState<string>();
  const [subs, setSubs] = useState<any>([]);
  const [allTransactions, setAllTransactions] = useState<any>([]);

  const router = useRouter()

  const headers = ["No", "Fund name", "Unit Price", "NAV", "Fund type", "Fund symbol", "Actions"];

  const formik = useFormik({
    initialValues: {
      fundName: "",
    },
  
    validationSchema: Yup.object({
      fundName: Yup.string()
        .required("fundName is required"),
    }),
  
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const handleFundName = (fundName: string) => {
    setFundName(fundName)
  }
  const handleFundType = (fundType: string) => {
    setFundType(fundType)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleCloseDeleteModal = () => {
    setIsDeleteModelOpen(false)
  }
  
  const fundTypes: string[] = [
    "Bk fund",
    "Equity Fund"
  ]

  const token = session?.user?.token;

  useEffect(() => {
    fetchAllFunds();
    fetchAllSubs();
    getTransactions();
  }, [token])

  const fetchAllFunds = async () => {
    if (token) {
      setIsLoading(true);
      const response = await fetchFunds(token);
    
      setFunds(response.fund)

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

  const fetchAllSubs = async () => {
    if (token) {
      setIsLoading(true);

      const response = await fetchSubs(token);
    
      setSubs(response);

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
      "Unit Price": `${fund?.fund?.DepositoryAccounts[0]?.DespositoryAccountCurrency} ${fund?.balance?.fundBalance}`,
      "NAV": `${fund?.fund?.DepositoryAccounts[0]?.DespositoryAccountCurrency} ${fund?.balance?.fundBalance}`,
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

  const LastWeekTimeStamp = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 5);

    return oneWeekAgo.toISOString();
  }


  const calculateFundIncrease = () => {
    let fundIncrease;

    const fundsForLastWeek = funds?.filter((fund: any) => fund?.fund?.createdAt <= LastWeekTimeStamp())
    const fundsForLastWeekLength = fundsForLastWeek?.length !== 0 ? fundsForLastWeek?.length : 1

    const fundsForThisWeek = funds?.filter((fund: any) => fund?.fund?.createdAt > LastWeekTimeStamp())

    if (fundsForLastWeekLength === 0) {
      fundIncrease = (fundsForThisWeek?.length - fundsForLastWeekLength)
    } else {
      fundIncrease = (fundsForThisWeek?.length - fundsForLastWeekLength) / fundsForLastWeekLength
    }

    const fundsIncreasePercentage = fundIncrease * 100

    return fundsIncreasePercentage;
  }

  const calculateTransactionsIncrease = () => {
    let transactionIncrease;

    const transactionsForLastWeek = allTransactions?.filter((transaction: any) => transaction?.createdAt <= LastWeekTimeStamp())
    const transactionsForLastWeekLength = transactionsForLastWeek?.length

    const transactionsForThisWeek = allTransactions?.filter((transaction: any) => transaction?.createdAt > LastWeekTimeStamp())

    if (transactionsForLastWeekLength === 0) {
      transactionIncrease = (transactionsForThisWeek?.length - transactionsForLastWeekLength)
    } else {
      transactionIncrease = (transactionsForThisWeek?.length - transactionsForLastWeekLength) / transactionsForLastWeekLength
    }

    const transactionsIncreasePercentage = transactionIncrease * 100

    return transactionsIncreasePercentage;
  }

  const calculateSubscriptionIncrease = () => {
    let subscriptionIncrease;

    const subscriptionsForLastWeek = subs?.filter((sub: any) => sub?.createdAt <= LastWeekTimeStamp())
    const subscriptionsForLastWeekLength = subscriptionsForLastWeek?.length

    const subscriptionsForThisWeek = subs?.filter((sub: any) => sub?.createdAt > LastWeekTimeStamp())

    if (subscriptionsForLastWeekLength === 0) {
      subscriptionIncrease = (subscriptionsForThisWeek?.length - subscriptionsForLastWeekLength)
    } else {
      subscriptionIncrease = (subscriptionsForThisWeek?.length - subscriptionsForLastWeekLength) / subscriptionsForLastWeekLength
    }

    const subscriptionsIncreasePercentage = subscriptionIncrease * 100

    return subscriptionsIncreasePercentage;
  }


  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className='flex flex-col justify-center lg:mx-[9rem]'>
        <p className="text-[#475569] font-bold text-4xl py-4">Overview</p>
        <div className="flex lg:justify-between flex-col lg:flex-row flex-wrap">
          <Card
            title="Total Clients"
            imageAlt="Total Clients"
            icon="/client.svg"
            change={calculateSubscriptionIncrease()}
            changeIcon="/increase.svg"
            amount={subs?.length}
            period="last week"
            styles="lg:mr-3 mb-3"
          />
          <Card
            title="Total funds"
            imageAlt="Total funds"
            icon="/total-funds.svg"
            change={calculateFundIncrease()}
            changeIcon="/increase.svg"
            amount={funds?.length}
            period="last week"
            styles="lg:mr-3 mb-3"
          />
          {/* <Card
            title="Total market Cap"
            imageAlt="Total market Cap"
            icon="/market-cap.svg"
            change={3.3}
            changeIcon="/increase.svg"
            amount={1500}
            period="last week"
            styles="lg:mr-3 mb-3"
          /> */}
          <Card
            title="Total transactions"
            imageAlt="Total transactions"
            icon="/total-transactions.svg"
            change={calculateTransactionsIncrease()}
            changeIcon="/increase.svg"
            amount={allTransactions?.length}
            period="last week"
            styles="mb-3"
          />
        </div>

        <div className="flex flex-grow min-h-[60vh] w-full overflow-scroll">
          <Table
            headers={headers}
            data={fundDatas}
            isLoading={isLoading}
            title="Funds types"
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={openModal}
            changeIndex={3}
            itemsPerPage={7}
            displayButton={true}
          />
        </div>
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
        <Modal isOpen={isOpen} onClose={closeModal} >
          <div className='bg-white rounded-lg  h-1/1 px-10 py-5'>
            <p className="px-8 text-[#475569] font-semibold">Create Fund</p>
            <div className='py-3'>
              <InputField
                value={formik.values.fundName}
                name="fundName"
                placeholder='Enter Fund name'
                required={false}
                type='text'
                className='text-xs'
                label='Fund name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
            </div>
            <div className='py-3'>
              <SelectBox
                value={fundType}
                required={false}
                values={fundTypes}
                className='text-xs'
                label='Fund type'
                onChange={handleFundType}
                {...inputFieldStylingProps}
              />
            </div>
            <div className="flex justify-end px-8 ">
              <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Create fund' isDisabled={false} />
              <Button styling='bg-[#F0F4F8] text-[#475569] py-2 px-4 mt-2 ml-4 rounded-lg ' value='Cancel' isDisabled={false} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

