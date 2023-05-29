'use client'

import Card from "../components/Card";
import Button from "../components/Button"
import Table from '../components/Table';

export default function Dashboard() {
  const handleCLick = () => {
    console.log("hello")
  }
  const headers = ['No', 'Avatar', 'Fund name', 'Fund',"24h%","Market Cap",];
  const data = [
    {
      id: 1,
      avatar: "J",
      name: 'Unguka fund',
      age: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      id: 2,
      avatar: "J",
      name: 'Terimbere fund',
      age: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      id: 3,
      avatar: "J",
      name: 'Umwalimu fund',
      age: 3000,
      country: 3.3,
      city: 345455656.34
    },
    {
      id: 3,
      avatar: "J",
      name: 'Ejo heza fund',
      age: 3000,
      country: 3.3,
      city: 345455656.34
    },

  ]

  return (
    <div className="bg-[#eaeaed] h-full ">
      <p className="text-[#475569] font-bold text-4xl px-6 py-4">Overview</p>

      <div className="lg:flex justify-between p-6">
        <Card title="Total Clients" imageAlt="Total Clients" icon="/client.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />
        <Card title="Total funds" imageAlt="Total funds"  icon="/total-funds.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />
        <Card title="Total market Cap" imageAlt="Total market Cap" icon="/market-Cap.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />
        <Card title="Total transactions" imageAlt="Total transactions" icon="/total-transactions.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />

      </div>
      <div className="p-6 pt-0">
        <Table
          headers={headers}
          data={data}
          title="Funds types"
          buttonText="Create fund"
          buttonStyling='bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg'
          buttonOnClick={handleCLick}
          viewAllOnClick={handleCLick}
        />
      </div>
    </div>
  )
}
