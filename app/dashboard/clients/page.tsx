"use client";

import { useEffect, useState } from "react";
import Table from "@/app/components/Table";
import Modal from "@/app/components/Modal";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import SelectBox from "@/app/components/SelectBox";
import fetchSubs from "@/lib/actions/get-subscriptions/fetchSubs";
import { useSession } from "next-auth/react";
import approveSubs from "@/lib/actions/approve-subs/approveSubs";
import rejectSubs from "@/lib/actions/reject-subs/rejectSubs";

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
  const { data: session } = useSession();
  const [subs, setSubs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState<string>();
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const token = session?.user?.token;
  
  const headers = [
    "Names",
    "Date of birth",
    "address",
    "Amount",
    "Fund name",
    "Subscription date",
    // "Attachments",
    "status",
    "Actions",
  ];

  useEffect(() => {
    fetchAllSubs();
  }, [token])

  const fetchAllSubs = async () => {
    if (token) {
      setIsLoading(true);

      const response = await fetchSubs(token);
      console.log(response)
    
      setSubs(response);

      setIsLoading(false);
    }
  }

  const openApproveModal = (subId: string) => {
    setIsApproveOpen(true);
    setSubscriptionId(subId);
  };
  const closeApproveModal = () => {
    setIsApproveOpen(false);
  };
  const openRejectModal = (subId: string) => {
    setIsRejectOpen(true);
    setSubscriptionId(subId);
  };
  const closeRejectModal = () => {
    setIsRejectOpen(false);
  };

  const handleApproveSub = async () => {
    setIsApproving(true)

    console.log(subscriptionId)

    await approveSubs(token, subscriptionId)

    setIsApproving(false)

    closeApproveModal()

    fetchAllSubs()
  }

  const handleRejectSub = async () => {
    setIsRejecting(true)

    console.log(subscriptionId)

    await rejectSubs(token, subscriptionId)

    setIsRejecting(false)

    closeRejectModal()

    fetchAllSubs()
  }

  

  const allDatas = subs?.map((sub: any) => {
    return {
      // "id": `${sub?.id}`,
      "Names": `${sub?.investorId?.firstName !== null ? sub?.investorId?.firstName : '-'} ${sub?.investorId?.middleName !== null ? sub?.investorId?.middleName : ''} ${sub?.investorId?.lastName !== null ? sub?.investorId?.lastName : ''}`,
      "Date of birth": `${sub?.investorId?.dateOfBirth !== null ? sub?.investorId?.dateOfBirth : '-'}`,
      "Address": `${sub?.investorId?.residence !== null ? sub?.investorId?.residence : '-'}`,
      "Amount": `${sub?.amountInvested}`,
      "Fund name": `${sub?.fundId?.FundName}`,
      "Subscription date": `${sub?.subscriptionDate.split('T')[0]}`,
      // "Attachments": "ID_Proof.pdf",
      "status": (
        <div>
          {sub?.status === "approved" && (<h1 className="text-green-500">{sub?.status}</h1>)}
          {sub?.status === "rejected" && (<h1 className="text-red-500">{sub?.status}</h1>)}
          {sub?.status === "pending" && (<h1 className="text-yellow-500">{sub?.status}</h1>)}
        </div>
      ),
      // "status": `${sub?.status}`,
      "Actions": (
        <div className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-between">
          <div className="">
            {sub?.status !== "approved" && (<Button
              value="Approve"
              styling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => {
                openApproveModal(sub?.id)
              }}
              isDisabled={false}
            />)}
            {sub?.status !== "rejected" && (<Button
              value="Reject"
              styling="bg-white text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg border border-[#002674]"
              onClick={() => {
                openRejectModal(sub?.id)
              }}
              isDisabled={false}
            />)}
          </div>
        </div>
      )
    }
  })

  return (
    <div className="bg-[#eaeaed] min-h-[87vh] ">
      <div className=" flex flex-col justify-center lg:mx-[8rem]">
        <p className="text-[#475569] font-bold text-3xl py-3">Clients</p>
        <div className="flex flex-grow max-h-[75vh]">
          <Table
            headers={headers}
            data={allDatas}
            isLoading={isLoading}
            title="Client history"
            buttonText=""
            buttonStyling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
            buttonOnClick={() => {}}
            marketCapIndex={3}
            // changeIndex={4}
            itemsPerPage={7}
            idIndex={0}
            isTableRowLink={false}
            displayButton={false}
            // displayApprove={true}
            // attachmentIndex={6}
            actionIndex={5}
          />
        </div>
      </div>
      <Modal isOpen={isApproveOpen} onClose={closeApproveModal}>
        <div className="bg-white rounded-lg  h-1/1 px-10 py-5">
          <p className="text-3xl pb-2 text-[#475569] border-b border-[#FOF4F8]">
            Approve client
          </p>
          <p className="text-[#475569] mt-4">
            Are you sure you want to approve this Client.{" "}
          </p>
          <div className="flex justify-end mt-4">
            <Button
              value="Approve"
              styling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => {
                handleApproveSub()
              }}
              isDisabled={false}
              isLoading={isApproving}
            />
            <Button
              value="Cancel"
              styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => closeApproveModal()}
              isDisabled={false}
            />
          </div>
        </div>
      </Modal>
      <Modal isOpen={isRejectOpen} onClose={closeRejectModal}>
        <div className="bg-white rounded-lg  h-1/1 px-10 py-5">
          <p className="text-3xl pb-2 text-[#475569] border-b border-[#FOF4F8]">
            Reject client
          </p>
          <p className="text-[#475569] mt-4">
            Are you sure you want to reject this client. This operation cannot
            be undone.{" "}
          </p>
          <div className="flex justify-end mt-4">
            <Button 
              value="Reject"
              styling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => {
                handleRejectSub()
              }}
              isDisabled={false}
              isLoading={isRejecting}
            />
            <Button
              value="Cancel"
              styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => closeRejectModal()}
              isDisabled={false}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
