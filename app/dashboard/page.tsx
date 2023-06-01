'use client'

import { useState } from "react";
import Card from "../components/Card";
import Table from '../components/Table';
import Modal from "../components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";

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
  const [isOpen, setIsOpen] = useState(false);
  const [fundName, setFundName] = useState('')
  const [fundType, setFundType] = useState('')

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

  const handleCLick = () => {
    console.log("hello");
  };

  const headers = ['No', 'Fund name', 'Fund', "24h%", "Market Cap"];

  const data = [
    {
      No: 1,
      name: 'Unguka fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 2,
      name: 'Terimbere fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 3,
      name: 'Umwalimu fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 4,
      name: 'Ejo heza fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 5,
      name: 'Ejo heza fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 6,
      name: 'Bk fund',
      fund: 3000,
      country: -3.3,
      city: 345455656.34
    },
    {
      No: 7,
      name: 'Equity fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    }
    ,
    {
      No: 8,
      name: 'I&M fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    }
    ,
    {
      No: 9,
      name: 'KCB fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    }
    ,
    {
      No: 10,
      name: 'Access fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    }
    ,
    {
      No: 11,
      name: 'RIM fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },

  ];
  const fundTypes: string[] = [
    "Bk fund",
    "Equity Fund"
  ]

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className='flex flex-col justify-center lg:mx-[15rem]'>
        <p className="text-[#475569] font-bold text-4xl py-4">Overview</p>
        <div className="flex lg:justify-between flex-col lg:flex-row flex-wrap">
          <Card
            title="Total Clients"
            imageAlt="Total Clients"
            icon="/client.svg"
            change={3.3}
            changeIcon="/increase.svg"
            amount={1500}
            period="last week"
            styles="lg:mr-3 mb-3"
          />
          <Card
            title="Total funds"
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
          <Card
            title="Total transactions"
            imageAlt="Total transactions"
            icon="/total-transactions.svg"
            change={3.3}
            changeIcon="/increase.svg"
            amount={1500}
            period="last week"
            styles="mb-3"
          />
        </div>

        <div className="flex flex-grow min-h-[60vh]">
          <Table
            headers={headers}
            data={data}
            title="Funds types"
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={openModal}
            viewAllOnClick={handleCLick}
            marketCapIndex={4}
            changeIndex={3}
          />
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} >
          <div className='bg-white rounded-lg  h-1/1 px-10 py-5'>
            <p className="px-8 text-[#475569] font-semibold">Create Fund</p>
            <div className='py-3'>
              <InputField
                value={fundName}
                placeholder='Enter Fund name'
                required={false}
                type='text'
                className='text-xs'
                label='Fund name'
                onChange={handleFundName}
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
              <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Create fund' />
              <Button styling='bg-[#F0F4F8] text-[#475569] py-2 px-4 mt-2 ml-4 rounded-lg ' value='Cancel' />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

