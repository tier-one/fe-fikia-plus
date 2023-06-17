"use client ";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import PaginatedData from "./Pagination";
import Link from "next/link";
import Modal from "@/app/components/Modal";
interface TableProps {
  headers: string[];
  data: object[];
  title: string;
  buttonText?: string;
  buttonStyling?: string;
  buttonIcon?: string;
  buttonOnClick?: () => void;
  changeIndex?: number;
  marketCapIndex?: number;
  itemsPerPage: number;
  isTableRowLink?: boolean;
  idIndex?: number;
  displayButton?: boolean;
  displayApprove?: boolean;
  attachmentIndex?: number;
  actionIndex?: number;
  displayMore?: boolean;
}

const Table = ({
  headers,
  data,
  title,
  buttonText,
  buttonStyling,
  buttonOnClick,
  changeIndex,
  marketCapIndex,
  itemsPerPage,
  isTableRowLink,
  idIndex,
  displayButton,
  displayApprove,
  attachmentIndex,
  actionIndex,
  displayMore
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const openApproveModal = () => {
    setIsApproveOpen(true);
  };
  const closeApproveModal = () => {
    setIsApproveOpen(false);
  };
  const openRejectModal = () => {
    setIsRejectOpen(true);
  };
  const closeRejectModal = () => {
    setIsRejectOpen(false);
  };
  return (
    <div className="mt-10 rounded-[24px] bg-white p-10 mb-4 flex-grow">
      <div className="flex justify-between">
        <p className="text-[#475569] font-semibold text-xl">{title}</p>
        {displayButton ? (
          <Button
            value={buttonText}
            styling={buttonStyling}
            onClick={buttonOnClick}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`py-2 px-4 border-b border-gray-200 text-left text-[#475569] ${
                    actionIndex === index ? "flex justify-between" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
              {displayMore ? (
                <th className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-end">
                  More
                </th>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-2 px-4 border-b border-gray-200 text-left text-[#475569]`}
                  >
                    {isTableRowLink && idIndex !== undefined ? (
                      <Link
                        key={cellIndex}
                        href={`/dashboard/funds/${Object.values(row)[idIndex]}`}
                        className="bg-red-500"
                      >
                        <p
                          className={`${
                            changeIndex === cellIndex && cell > 0
                              ? "text-[#22C45E]"
                              : changeIndex === cellIndex && cell < 0
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {changeIndex === cellIndex && cell > 0
                            ? `+${cell}%`
                            : changeIndex === cellIndex && cell < 0
                            ? `${cell}%`
                            : typeof cell === "number" &&
                              marketCapIndex !== cellIndex
                            ? cell.toLocaleString()
                            : marketCapIndex === cellIndex
                            ? `$${cell.toLocaleString()}`
                            : cell}
                        </p>
                      </Link>
                    ) : attachmentIndex === cellIndex ? (
                      <button>
                        <div className="flex flex-row">
                          <Image
                            src="/attachmnet.svg"
                            alt="attachment"
                            width={10}
                            height={10}
                          />
                          <span className="ml-3 text-[#2563EA]"> {cell}</span>
                        </div>
                      </button>
                    ) : (
                      <>
                        <p
                          className={`${
                            changeIndex === cellIndex && cell > 0
                              ? "text-[#22C45E]"
                              : changeIndex === cellIndex && cell < 0
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {changeIndex === cellIndex && cell > 0
                            ? `+${cell}%`
                            : changeIndex === cellIndex && cell < 0
                            ? `${cell}%`
                            : typeof cell === "number" &&
                              marketCapIndex !== cellIndex
                            ? cell.toLocaleString()
                            : marketCapIndex === cellIndex
                            ? `$${cell.toLocaleString()}`
                            : cell}
                        </p>
                      </>
                    )}
                  </td>
                ))}

                {displayApprove ? (
                  <td className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-between">
                    <div className="">
                      <Button
                        value="Approve"
                        styling={buttonStyling}
                        onClick={openApproveModal}
                      />
                      <Button
                        value="Reject"
                        styling="bg-white text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg border border-[#002674]"
                        onClick={openRejectModal}
                      />
                    </div>
                  </td>
                ) : displayMore?(
                  <td className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-center">
                    <Image src="/more.svg" alt="more" width={8} height={13} />
                  </td>
                ):<></>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <PaginatedData
          pageSize={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
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
              styling={buttonStyling}
              onClick={() => {}}
            />
            <Button
              value="Cancel"
              styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => {}}
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
            <Button value="Reject" styling={buttonStyling} onClick={() => {}} />
            <Button
              value="Cancel"
              styling="bg-[#F0F4F8]  text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg"
              onClick={() => {}}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
