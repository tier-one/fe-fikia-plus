'use client'

import Card from "../components/Card";
import Button from "../components/Button"
import Table from '../components/Table';

export default function Dashboard() {
  const handleCLick = () => {
    console.log("hello")
  }
  const headers = ['Name', 'Age', 'Country','city'];
  const data = [
    {
      name: 'John Doe',
      age: 30,
      country: 'USA',
      city:"New youk"
    },
    {
      name: 'Jane Smith',
      age: 25,
      country: 'Canada',
      city:'Ontario'
    },
    {
      name: 'Mark Johnson',
      age: 35,
      country: 'Australia',
      city:'Sydney'
    },
  ]

  return (
    <div className="">
      <div className="m-10">
      <Card title="Total Clients" icon="/client.svg" change={3.3} changeIcon="/increase.svg" amount={1500} period="last week" />
      <Button
        value="Create fund"
        styling='bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg'
        onClick={handleCLick}
      />
      <Table headers={headers} data={data} />
    </div>
    </div>
  )
}
