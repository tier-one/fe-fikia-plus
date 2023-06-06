'use client'

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image"
import Card from "@/app/components/Card";
import Table from '@/app/components/Table';
import Modal from "@/app/components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
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
const headers = ['Client name', 'Transaction type', 'Debit(RWF)', "Credit", "Number of units", "Market gain", "Market loss", "Net asset value", "Date"];

const data = [
    {
        'Client name': "Marvin McKinney",
        "transaction type": "Redemption",
        'Debit(RWF)': "-",
        "Credit": 50000,
        "Number of units": 50000,
        "Market gain": "-",
        "Market loss": "-",
        "Net asset value": 50000,
        "Date": "12 May,2023"
    },

    {
        'Client name': "Jenny Wilson",
        "transaction type": "Contribution",
        'Debit(RWF)': 100000,
        "Credit": 40000,
        "Number of units": 50300,
        "Market gain": 200,
        "Market loss": "-",
        "Net asset value": 50300,
        "Date": "12 May,2023"
    }

]
export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(false);
    const [fundName, setFundName] = useState('')
    const [fundType, setFundType] = useState('')
    const [activeTab, setActiveTab] = useState("fund-transactions");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

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
    const fundTypes: string[] = [
        "Bk fund",
        "Equity Fund"
    ]

    return (
        <div className="bg-[#eaeaed] min-h-[87vh] ">
            <div className='flex flex-col justify-center lg:mx-10'>
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
                <div className="border-b border-gray-300 mb-4  ">
                    <button className={`py-2 text-xl text-center border-b-2 font-medium text-[#475569] ${activeTab === "fund-transactions" ? 'border-[#0EA4E8]' : ''} leading-5 focus:outline-none focus:border-[#0EA4E8]`} onClick={() => handleTabClick("fund-transactions")}>
                        Fund transactions
                    </button>

                    <button className="py-2 px-6 text-xl text-center border-b-2  font-medium  leading-5 text-[#475569] hover:border-[#0EA4E8] focus:outline-none  focus:border-[#0EA4E8]" onClick={() => handleTabClick("settings")}>
                        Settings
                    </button>
                </div>
                {activeTab === "fund-transactions" ?
                    <div className="flex flex-col">
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
                                buttonOnClick={openModal}
                                itemsPerPage={7}
                                displayButton={false}
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
                    </div> : <Settings />}

            </div>
        </div>
    );
}

