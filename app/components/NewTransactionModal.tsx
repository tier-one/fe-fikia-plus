import {useState} from 'react'
import Modal from "@/app/components/Modal";
import Button from "./Button";
import SelectBox from "@/app/components/SelectBox";
import InputField from "@/app/components/InputField";

const inputFieldStylingProps = {
    container: {
      className: "flex flex-col space",
    },
    inputlabel: {
      className: "text-base text-gray-600 font-light",
    },
    input: {
      className:
        "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
    },
  };

interface NewTransactionModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
}
const transactionTypes:string[]=[
    'contribution',
    'saving',
    'investment'
]
const clients:string[]=[
    'Eric Niyonkuru',
    'Ntare Jim',
    'Manzi Olivier'
]
const NewTransactionModal = ({isModalOpen,closeModal}:NewTransactionModalProps) => {
const [transactionType,setTransactionType]=useState('')
const [client,setClient]=useState('')
const [amount,setAmount]=useState('')
const handleTransactionType = (type: string) => {
    setTransactionType(type);
  };
  const handleClient = (name: string) => {
    setClient(name);
  };
  const handleAmount = (amount: string) => {
    setAmount(amount);
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
    <div className="bg-white rounded-lg  h-1/1 px-10 py-5">
      <p className="text-3xl pb-2 text-[#475569] border-b border-[#FOF4F8]">
      New transaction 
      </p>

      <div className="py-3 w-full">
            <SelectBox
              value={transactionType}
              required={false}
              values={transactionTypes}
              className="text-xs"
              label="Transaction type"
              onChange={handleTransactionType}
              {...inputFieldStylingProps}
            />
          </div>
          <div className="py-3 w-full">
            <SelectBox
              value={client}
              required={false}
              values={clients}
              className="text-xs"
              label="Select client"
              onChange={ handleClient}
              {...inputFieldStylingProps}
            />
          </div>
          <div className="py-3 w-full">
          <InputField
            value={amount}
            placeholder="5000"
            required={false}
            type="number"
            className="text-xs"
            label="Amount"
            onChange={handleAmount}
            {...inputFieldStylingProps}
          />
        </div>
      <div className="flex justify-end">
        
        <Button
          value="Cancel"
          styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
          onClick={() => {}}
        />
         <Button
          value="Add transaction"
          styling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
          onClick={() => {}}
        />
      </div>
    </div>
  </Modal>
  )
}

export default NewTransactionModal