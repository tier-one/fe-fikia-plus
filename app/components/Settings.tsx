import { useState } from 'react'
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import SelectBox from "@/app/components/SelectBox";

const inputFieldStylingProps = {
    container: {
        className: 'flex flex-col space'
    },
    inputlabel: {
        className: 'text-base text-gray-600 font-light'
    },
    input: {
        className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
    },
}
const custodianValues: string[] = ['BPR', 'BK', 'Equity']
const Settings = () => {
    const [accountNumber, setAccountNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [custodian, setCustodian] = useState('')

    const handleAccountNumber = (accountNumber: string) => {
        setAccountNumber(accountNumber)
    }
    const handleBankName = (bankName: string) => {
        setBankName(bankName)
    }
    const handleCustodian = (custodian: string) => {
        setCustodian(custodian)
    }

    return (
        <div
            className="min-h-[60h] bg-white rounded-xl mb-4"
        >
            <div className="flex justify-between mx-8 py-4 border-b border-gray-300 ">
                <p className="text-[#475569] font-semibold  text-3xl   w-1/4 py-2">Fund details</p>
                <div className=" w-2/4 flex justify-end py-2 ">
                    <Button styling='bg-[#002674] text-white  px-4   rounded-lg ' value='Update' />
                    <Button styling='bg-[#F0F4F8] text-[#475569] py-2 px-4  ml-4 rounded-lg ' value='Cancel' />
                </div>
            </div>
            <div className="mx-8  mb-4  border-b-2 border-gray-300 " >
                <p className="text-[#475569] font-semibold   py-2">Account depository information</p>
                <p className="text-[#475569]    py-2">Fill in the account numbers of the depository account</p>
                <div className='py-3 w-1/4'>
                    <InputField
                        value={accountNumber}
                        placeholder='934-394-3443'
                        required={false}
                        type='text'
                        className='text-xs'
                        label='Account number'
                        onChange={handleAccountNumber}
                        {...inputFieldStylingProps}
                    />
                </div>
            </div>
            <div className="mx-8  mb-4  border-b-2 border-gray-300" >
                <p className="text-[#475569] font-semibold   py-2">Cash accounts information</p>
                <p className="text-[#475569]    py-2">Fill in the cash account bank name and number </p>
                <div className="flex w-1/4">
                    <div className='py-3 w-1/2'>
                        <InputField
                            value={bankName}
                            placeholder='Equity bank'
                            required={false}
                            type='text'
                            className='text-xs'
                            label='Bank Name'
                            onChange={handleBankName}
                            {...inputFieldStylingProps}
                        />
                    </div>
                    <div className='py-3 ml-4  w-1/2'>
                        <InputField
                            value={accountNumber}
                            placeholder='233-4455-3455'
                            required={false}
                            type='text'
                            className='text-xs'
                            label='Account number'
                            onChange={handleAccountNumber}
                            {...inputFieldStylingProps}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-8  mb-4   border-b-2 border-gray-300 " >
                <p className="text-[#475569] font-semibold   py-2">Custodian information</p>
                <p className="text-[#475569]    py-2">Fill in the cash account bank name and number </p>
                <div className="flex w-1/4">
                    <div className='py-3 w-1/2'>
                        <SelectBox
                            value={custodian}
                            required={false}
                            values={custodianValues}
                            className='text-xs'
                            label='Select custodian'
                            onChange={handleCustodian}
                            {...inputFieldStylingProps}
                        />
                    </div>
                    <div className='py-3 ml-4  w-1/2'>
                        <InputField
                            value={accountNumber}
                            placeholder='10'
                            required={false}
                            type='text'
                            className='text-xs'
                            label='Percentage fees'
                            onChange={handleAccountNumber}
                            {...inputFieldStylingProps}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-8  mb-4  " >
                <p className="text-[#475569] font-semibold   py-2">Trustee information</p>
                <p className="text-[#475569]    py-2">Set your trustee type and fees </p>
                <div className="flex w-1/4">
                    <div className='py-3 w-1/2'>
                        <SelectBox
                            value={custodian}
                            required={false}
                            values={custodianValues}
                            className='text-xs'
                            label='Select custodian'
                            onChange={handleCustodian}
                            {...inputFieldStylingProps}
                        />
                    </div>
                    <div className='py-3 ml-4  w-1/2'>
                        <InputField
                            value={accountNumber}
                            placeholder='10'
                            required={false}
                            type='text'
                            className='text-xs'
                            label='Percentage fees'
                            onChange={handleAccountNumber}
                            {...inputFieldStylingProps}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings