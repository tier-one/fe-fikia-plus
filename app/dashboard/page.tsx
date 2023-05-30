'use client'

import Card from "../components/Card";
import Table from '../components/Table';


export default function Dashboard() {
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
      name: 'Ejo heza fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      No: 7,
      name: 'Ejo heza fund',
      fund: 3000,
      country: 3.3,
      city: 345455656.34
    }
    ,

  ];

  return (

    <div className="bg-[#eaeaed] min-h-[87vh] ">

      <div className='flex flex-col mx-20'>
        <p className="text-[#475569] font-bold text-4xl py-4">Overview</p>

        <div className="lg:flex justify-between">
          <Card title="Total Clients" imageAlt="Total Clients" icon="/client.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" styles="mr-3" />
          <Card title="Total funds" imageAlt="Total funds" icon="/total-funds.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" styles="mr-3"/>
          <Card title="Total market Cap" imageAlt="Total market Cap" icon="/market-cap.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" styles="mr-3" />
          <Card title="Total transactions" imageAlt="Total transactions" icon="/total-transactions.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />
        </div>

        <div className="flex flex-1">
          <Table
            headers={headers}
            data={data}
            title="Funds types"
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={handleCLick}
            viewAllOnClick={handleCLick}
          />
        </div>
      </div>
    </div>
  );
}
