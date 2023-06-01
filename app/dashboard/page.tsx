'use client'

import { useState } from "react";
import Card from "../components/Card";
import Table from '../components/Table';
import Modal from "../components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleEmail = (email: string) => {
    setEmail(email)
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
        <Modal isOpen={isOpen} onClose={closeModal} title="Create fund ">
          <div className='bg-white rounded-lg shadow-lg h-3/4 px-10 py-5'>
            <div className='py-3'>
              <InputField
                value={email}
                placeholder='Enter fund name'
                required={false}
                type='text'
                className='text-xs'
                label='Fund name'
                onChange={handleEmail}
                {...inputFieldStylingProps}
              />
            </div>
            <div className='py-3'>
              <InputField
                value={password}
                placeholder='Enter your password here'
                required={false}
                type='text'
                className='text-xs'
                label='Password'
                onChange={handleEmail}
                {...inputFieldStylingProps}
              />
            </div>

            <div className="flex">
              <div className='flex flex-col space w-full px-8 py-3'>
                <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Create fund' />
              </div>
              <div className='flex flex-col space w-full px-8 py-3'>
                <Button styling='bg-[#F0F4F8] text-[#475569] py-2 px-4 mt-2  rounded-lg ' value='Cancel' />
              </div>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  );
}

