import {useState} from 'react'
import FundTopBar from "@/app/components/FundTopBar"
import Table from "@/app/components/Table"
import NewAssetModal from "@/app/components/NewTransactionModal"

const headers = ["No", "Asset name", "Unit Price", "24h%", "Market Cap"];

  const data = [
    {
      No: 1,
      "Asset name": "Unguka fund",
      unitPrice: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 2,
     "Asset name": "Terimbere fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 3,
     "Asset name": "Umwalimu fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 4,
     "Asset name": "Ejo heza fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 5,
     "Asset name": "Ejo heza fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 6,
     "Asset name": "Bk fund",
      fund: 3000,
      change: -3.3,
      marketCap: 345455656.34,
    },
    {
      No: 7,
     "Asset name": "Equity fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 8,
     "Asset name": "I&M fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 9,
     "Asset name": "KCB fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 10,
     "Asset name": "Access fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
    {
      No: 11,
     "Asset name": "RIM fund",
      fund: 3000,
      change: 3.3,
      marketCap: 345455656.34,
    },
  ];
const Assets = () => {
  const [isNewAssetModalOpen, setIsNewAssetModalOpen] = useState(false);
  const openNewAssetModal = () => {
    setIsNewAssetModalOpen(true);
  }
  const closeNewAssetModal = () => {
    setIsNewAssetModalOpen(false);
  }

  return (
    <div className="min-h-[60h] bg-white rounded-xl mb-4">
      <div className="flex justify-between mx-8 py-4 ">
        <p className="text-[#475569] font-semibold  text-3xl   w-1/4 py-2">
        Transactions
        </p>
        <FundTopBar
          newTransactionName="New Asset"
          newTransactionOnClick={openNewAssetModal}
          exportOnclick={() => {}}
        />
      </div>
      <div className="flex flex-grow max-h-[48vh]">
          <Table
            headers={headers}
            data={data}
            title=""
            buttonText="Create fund"
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={4}
            changeIndex={3}
            itemsPerPage={7}
            idIndex={0}
            isTableRowLink={false}
            displayButton={false}
            displayMore={false}
          />
        </div>
        <NewAssetModal isModalOpen={isNewAssetModalOpen} closeModal={closeNewAssetModal} />
    </div>
  );
};

export default Assets;
