"use client";

import { useState } from "react";
import Table from "@/app/components/Table";
import Modal from "@/app/components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";

const inputFieldStylingProps = {
  container: {
    className: "flex flex-col space w-full px-8",
  },
  inputlabel: {
    className: "text-base text-gray-600 font-light",
  },
  input: {
    className:
      "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
  },
};

export default function Clients() {
  const headers = ["First name", "Date of birth", "address", "Transaction date", "Attachments", "actions"];

  const data = [
    {
      "First name": "Cameron Williamson",
      "Date of birth": "December 19, 1994",
      "address": "Bowery, New York",
      "Transaction date": "12 Jan 2023",
      "Attachments": "ID_Proof.pdf",
     
    },
    {
      "First name": "Cameron Williamson",
      "Date of birth": "December 19, 1994",
      "address": "Bowery, New York",
      "Transaction date": "12 Jan 2023",
      "Attachments": "ID_Proof.pdf",
     
    },
    {
      "First name": "Cameron Williamson",
      "Date of birth": "December 19, 1994",
      "address": "Bowery, New York",
      "Transaction date": "12 Jan 2023",
      "Attachments": "ID_Proof.pdf",
     
    },
   
  ];

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className=" flex flex-col justify-center lg:mx-[8rem]">
        <p className="text-[#475569] font-bold text-3xl py-3">Clients</p>
        <div className="flex flex-grow min-h-[75vh]">
          <Table
            headers={headers}
            data={data}
            title="Client history"
            buttonText=""
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={4}
            changeIndex={3}
            itemsPerPage={7}
            idIndex={0}
            isTableRowLink={false}
            displayButton={false}
            displayApprove={true}
            attachmentIndex={4}
            actionIndex={5}
          />
        </div>
      </div>
    </div>
  );
}
