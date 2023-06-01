"use client "

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

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
    itemsPerPage?: number;
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
    itemsPerPage = 7,
}: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentData = data.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="mt-10 rounded-lg bg-white p-4 mb-4 flex-grow">
            <div className="flex justify-between">
                <p className="text-[#475569] font-semibold text-xl">{title}</p>
                <Button value={buttonText} styling={buttonStyling} onClick={buttonOnClick} />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="py-2 px-4 border-b border-gray-200 text-left text-[#475569]"
                                >
                                    {header}
                                </th>
                            ))}
                            <th className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-end">
                                More
                            </th>
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
                                        <p
                                            className={`${changeIndex === cellIndex && cell > 0
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
                                                    : typeof cell === "number" && marketCapIndex !== cellIndex
                                                        ? cell.toLocaleString()
                                                        : marketCapIndex === cellIndex
                                                            ? `$${cell.toLocaleString()}`
                                                            : cell}
                                        </p>
                                    </td>
                                ))}
                                <td className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-end">
                                    <Image src="/more.svg" alt="more" width={8} height={13} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 border border-gray-300 rounded-md mr-2"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`px-4 py-2 border border-gray-300 rounded-md ${page === currentPage ? "bg-[#002674] text-white" : ""
                            }`}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="px-4 py-2 border border-gray-300 rounded-md ml-2"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
