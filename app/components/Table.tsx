"use client "

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import PaginatedData from "./Pagination";
import Link from "next/link";

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
    isTableRowLink?: boolean,
    idIndex?: number,
    displayButton?: boolean
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
    displayButton
}: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentData = data.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <div className="mt-10 rounded-lg bg-white p-4 mb-4 flex-grow">
            <div className="flex justify-between">
                <p className="text-[#475569] font-semibold text-xl">{title}</p>
                {displayButton ? <Button value={buttonText} styling={buttonStyling} onClick={buttonOnClick} /> : <></>}
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
                           
                              <tr key={rowIndex} >
                                        {Object.values(row).map((cell, cellIndex) => (
                                             <td
                                                key={cellIndex}
                                                className={`py-2 px-4 border-b border-gray-200 text-left text-[#475569]`}
                                            >
                                                {isTableRowLink && idIndex !== undefined ? <Link key={cellIndex} href={`/dashboard/funds/${Object.values(row)[idIndex]}`} className="bg-red-500">
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
                                                </Link> : <>
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
                                                </>}
                                            </td>

                                        ))}
                                        <td className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-center">
                                            <Image src="/more.svg" alt="more" width={8} height={13} />
                                        </td>
                                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4">
                <PaginatedData pageSize={itemsPerPage}
                    totalItems={data.length}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default Table;
