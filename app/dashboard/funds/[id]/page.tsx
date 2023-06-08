'use client'

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image"
import Card from "@/app/components/Card";
import Table from '@/app/components/Table';
import Settings from "@/app/components/Settings";

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
const headers = ['Client name', 'Transaction type', 'Debit(RWF)', "Credit", "Number of units", "Net asset value", "Date"];

const data = [
    {
        'Client name': "Marvin McKinney",
        "transaction type": "Redemption",
        'Debit(RWF)': "-",
        "Credit": 50000,
        "Number of units": 50000,
       
        "Net asset value": 50000,
        "Date": "12 May,2023"
    },

    {
        'Client': "Jenny Wilson",
        "transaction type": "Contribution",
        'Debit(RWF)': 100000,
        "Credit": 40000,
        "Number of units": 50300,
        "Net asset value": 50300,
        "Date": "12 May,2023"
    }

]
export default function Dashboard() {

    const [fundName, setFundName] = useState('')
    const [fundType, setFundType] = useState('')
    const [activeTab, setActiveTab] = useState("fund-transactions");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-[#eaeaed] min-h-[87vh] ">
            <div className='flex flex-col  lg:mx-[9rem] '>
                <div className="flex mt-3">
                    <Link href="/dashboard/funds" className="mr-3 text-[#475569] font-semibold">
                        Funds
                    </Link>
                    <Image src="/more.svg" alt="more" width={8} height={13} />
                    <span className="text-[#0EA4E8] font-bold ml-3">Unguka fund</span>
                </div>
                <div>
                    <p className="text-[#475569] font-bold text-2xl py-4">Funds</p>
                </div>
                <div className="border-b border-gray-300 mb-4">
                    <button className={`py-2 text-xl text-center border-b-2 font-medium text-[#475569] ${activeTab === "fund-transactions" ? 'border-[#0EA4E8]' : ''} leading-5 focus:outline-none focus:border-[#0EA4E8]`} onClick={() => handleTabClick("fund-transactions")}>
                        Fund transactions
                    </button>

                    <button className="py-2 px-6 text-xl text-center border-b-2  font-medium  leading-5 text-[#475569] hover:border-[#0EA4E8] focus:outline-none  focus:border-[#0EA4E8]" onClick={() => handleTabClick("settings")}>
                        Settings
                    </button>
                </div>
                {activeTab === "fund-transactions" ?
                    (<>
                        <div className="flex-grow flex lg:justify-between flex-col lg:flex-row" >
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

                        <div className="flex flex-grow min-h-[60vh]">
                            <Table
                                headers={headers}
                                data={data}
                                title="Transactions"
                                buttonText="Create fund"
                                buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
                                buttonOnClick={()=>{}}
                                itemsPerPage={7}
                                displayButton={false}
                            />
                        </div>
                    </> ): <Settings />}
            </div>
        </div>
    );
}

