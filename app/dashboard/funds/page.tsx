"use client";

import { useEffect, useState } from "react";
import Table from "@/app/components/Table";
import Modal from "@/app/components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import fetchFunds from "@/lib/actions/get_fund/fetchFunds";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [funds, setFunds] = useState<any>([]);
  const headers = ["No", "Fund name", "Unit Price", "Fund type", "Fund symbol"];

  const token = session?.user?.token;

  useEffect(() => {
    fetchAllFunds();
  }, [token])

  const fetchAllFunds = async () => {
    if (token) {
      setIsLoading(true);
      const response = await fetchFunds(token);
    
      setFunds(response.fund)

      setIsLoading(false);
    }
  }

  const fundDatas = funds?.map((fund: any, index: any) => (
    {
      "No": index,
      "Fund name": fund?.fund?.FundName,
      "Unit Price": fund?.balance?.fundBalance,
      "Fund type": fund?.fund?.FundType,
      "Fund symbol": fund?.fund?.FundSymbol
    }
  ));

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className=" flex flex-col justify-center lg:mx-[9rem]">
        <p className="text-[#475569] font-bold text-4xl py-4">Funds</p>
        <div className="flex flex-grow max-h-[66vh]">
          <Table
            headers={headers}
            data={fundDatas}
            isLoading={isLoading}
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
