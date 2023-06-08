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

export default function Funds() {
  const headers = ["No", "Fund name", "Unit Price", "24h%", "Market Cap"];

  const data = [
    {
      No: 1,
      name: "Unguka fund",
      unitPrice: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 2,
      name: "Terimbere fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 3,
      name: "Umwalimu fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 4,
      name: "Ejo heza fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 5,
      name: "Ejo heza fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 6,
      name: "Bk fund",
      fund: 3000,
      change: -3.3,
      marketCap: 345455656.34,
    },
    {
      No: 7,
      name: "Equity fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 8,
      name: "I&M fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 9,
      name: "KCB fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 10,
      name: "Access fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 11,
      name: "RIM fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
  ];

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className=" flex flex-col justify-center lg:mx-[9rem]">
        <p className="text-[#475569] font-bold text-4xl py-4">Funds</p>
        <div className="flex flex-grow min-h-[66vh]">
          <Table
            headers={headers}
            data={data}
            title="Funds types"
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={4}
            changeIndex={3}
            itemsPerPage={7}
            idIndex={0}
            isTableRowLink={true}
            displayButton={true}
          />
        </div>
      </div>
    </div>
  );
}
