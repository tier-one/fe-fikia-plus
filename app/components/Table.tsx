import React from "react";
import Button from "./Button";
interface TableProps {
  headers: string[];
  data: object[];
  title: string;
  buttonText?: string;
  buttonStyling?: string;
  buttonIcon?: string;
  buttonOnClick?: () => void;
}

const Table = ({
  headers,
  data,
  title,
  buttonText,
  buttonStyling,
  buttonOnClick,
}: TableProps) => {
  return (
    <div className="mt-10 rounded-lg mx-6 bg-white p-4 mb-4 ">
      <div className="flex justify-between">
        <p>{title}</p>
        <Button
          value={buttonText}
          styling={buttonStyling}
          onClick={buttonOnClick}
        />
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
    </div>
  );
};

export default Table;
