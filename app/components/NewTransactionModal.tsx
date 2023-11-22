'use client';

import {useEffect, useState} from 'react'
import Modal from "@/app/components/Modal";
import Button from "./Button";
import { useFormik } from "formik";
import { formikTransactionInfoValidationSchema, formikTransactionSetUpValidationSchema } from './FormikValidationSchema';
import TransactionsInfo from './TransactionsInfo';
import TransactionSetUp from './TransactionSetUp';
import createTransactions from '@/lib/actions/create-transactions/createTransactions';
import { useSession } from 'next-auth/react';
import { useParams, useSearchParams } from 'next/navigation';
import fetchClients from '@/lib/actions/get-all-clients/fetchAllClients';
import fetchTransactions from '@/lib/actions/get-transactions/fetchTransactions';
import fetchTransactionById from '@/lib/actions/get_transactionById/fetchTransactionById';
import updateTransactions from '@/lib/actions/update-transaction/updateTransaction';

interface NewTransactionModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    getTransactions?: any;
    updateTransaction?: any
}

const NewTransactionModal = ({isModalOpen, closeModal, getTransactions, updateTransaction}: NewTransactionModalProps) => {
  const {data: session} = useSession();
  const [activeStep, setActiveStep] = useState(1);
  const [transactionValues, setTransactionValues] = useState({});
  const [clients, setClients] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [transactionIdToUpdate, setTransactionIdToUpdate] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const token = session?.user?.token;
  const fundId = useParams().id;

  const transactionId = searchParams?.get('id');

  const getClients = async () => {
    if (token) {
      const res = await fetchClients(token);
      setClients(res);
    }
  }

  const CLIENTS = clients?.map((client: {firstName: string, lastName: string}) => {
    return { "value": `${client.firstName} ${client.lastName}` };
  });

  useEffect(() => {
    getClients();
  }, [token])

  let transactionDatas = {};

  const transactionInfoFormik = useFormik({
    initialValues: {
      transactionType: "",
      investorFullNames: "",
      amount: "",
    },

    validationSchema: formikTransactionInfoValidationSchema,

    onSubmit: async (values) => {
      setTransactionValues(values)
      handleContinue();
    },
  });

  const transactionSetUpFormik = useFormik({
    initialValues: {
      price: "",
      status: "",
      note: "",
    },

    validationSchema: formikTransactionSetUpValidationSchema,

    onSubmit: async (values) => {
      setIsLoading(true);

      transactionDatas = {
        ...transactionValues,
        ...values
      }

      if (!isUpdate) {
        const results = await createTransactions(transactionDatas, token, fundId);
        setActiveStep(1);
        setIsUpdate(false)
      }

      if (isUpdate) {
          setActiveStep(1);
          setIsUpdate(false)
          const res = await updateTransactions(transactionDatas, token, transactionIdToUpdate)
      }

      handleResetFormik();

      getTransactions();

      closeModal();

      setIsLoading(false);
    },
  });

  useEffect(() => {
    if (updateTransaction) {
      transactionInfoFormik.setValues({
        ...transactionInfoFormik.values,
        transactionType: updateTransaction?.transactionType,
        investorFullNames: updateTransaction?.investorFullNames,
        amount: updateTransaction?.amount
      });
      setIsUpdate(true);
      setTransactionIdToUpdate(updateTransaction.id)
    }
  }, [updateTransaction]);

  useEffect(() => {
    if (updateTransaction) {
      transactionSetUpFormik.setValues({
        ...transactionSetUpFormik.values,
        price: updateTransaction?.price,
        status: updateTransaction?.status,
        note: updateTransaction?.note
      });
    }
  }, [updateTransaction]);

  const handleResetFormik = () => {
    transactionInfoFormik.resetForm();
    transactionSetUpFormik.resetForm();
  }

  const handleContinue = () => {
    setActiveStep(2);
  }

  const handleCloseModal = () => {
    closeModal();
    handleResetFormik();
    setActiveStep(1)
    setIsUpdate(false)
  }

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    <div className="bg-white rounded-lg  h-1/1 px-10 py-3">
      <p className="text-3xl pb-2 text-[#475569] border-b border-[#FOF4F8]">
      New transaction 
      </p>

     {activeStep === 1 && (
          <TransactionsInfo formik={transactionInfoFormik} CLIENTS={CLIENTS} />
      )}
      
      {activeStep === 2 && (
          <TransactionSetUp formik={transactionSetUpFormik} />
      )}

      <div className="flex justify-end">
        <Button
          value="Cancel"
          styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
          onClick={() => {
            closeModal()
            setActiveStep(1)
            transactionInfoFormik.resetForm()
            transactionSetUpFormik.resetForm()
            setIsUpdate(false)
          }}
          isDisabled={false}
        />
        <Button
          value={activeStep === 1 ? "Continue" : activeStep !== 1 && !isUpdate ? "Add transaction" : "Update transaction"}
          styling="bg-[#002674] text-white py-2 px-4 mt-2 ml-4 rounded-lg"
          onClick={() => {
            activeStep === 1 ? 
            transactionInfoFormik.handleSubmit() :
            transactionSetUpFormik.handleSubmit()
          }}
          isDisabled={false}
          isLoading={isLoading}
        />
      </div>
    </div>
  </Modal>
  )
}

export default NewTransactionModal