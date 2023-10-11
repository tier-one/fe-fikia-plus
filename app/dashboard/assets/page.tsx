'use client';

import AssetsTable from '@/app/components/AssetsTable'
import AssetsTopbar from '@/app/components/AssetsTopbar'
import Table from '@/app/components/Table'
import React from 'react'

const headers = [
  "Asset Name",
  "Unit Price",
  "24 Hrs",
  "Market Cap",
  "Volume",
  "Asset Type",
];

const data = [
  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },

  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },

  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },

  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },

  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },

  {
    "Asset Name": "Grazia Appartment",
    "Unit Price": "100,000,000",
    "24 Hrs": "0.5 UP",
    "Market Cap": "120,000",
    "Volume": "120,000,000",
    "Asset Type": "Equity Securities",
  },
];

const page = () => {
  return (
    <div className='flex w-full min-h-[88vh] flex-col items-center gap-[60px] py-[50px] px-[30px] bg-[#EAEAED]'>
      <div className='flex w-full flex-col items-start gap-[28px] self-stretch'>
        <h1 className='text-[#475569] text-[32px] font-[500] leading-normal'>
          Assets
        </h1>

        <div className='flex w-full px-[16px] py-[24px] flex-col items-center flex-1 rounded-[16px] bg-[#FFF]'>
          <AssetsTopbar />
          <AssetsTable
              headers={headers}
              changeIndex={10}
              data={data}
              title=""
              buttonText="Create fund"
              buttonStyling="bg-[#002674] text-white  rounded-lg"
              buttonOnClick={() => {}}
              itemsPerPage={7}
              displayButton={false}
            />
        </div>
      </div>
    </div>
  )
}

export default page