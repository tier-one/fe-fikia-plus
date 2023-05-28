
import React from 'react';

interface TableProps {
    headers: string[];
    data: object[];
}

const Table = ({ headers, data }: TableProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="py-2 px-4 border-b border-gray-200 text-left text-[#475569]">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="py-2 px-4 border-b border-gray-200 text-left text-[#475569]"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
