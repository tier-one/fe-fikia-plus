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
    viewAllOnClick?: () => void;
}

const Table = ({
    headers,
    data,
    title,
    buttonText,
    buttonStyling,
    buttonOnClick,
    viewAllOnClick
}: TableProps) => {
    return (
        <div className="mt-10 rounded-lg bg-white p-4 mb-4 ">
            <div className="flex justify-between">
                <p className="text-[#475569] font-semibold text-xl">{title}</p>
                <Button
                    value={buttonText}
                    styling={buttonStyling}
                    onClick={buttonOnClick}
                />
            </div>
            <div className="flex justify-end p-4 pb-0">
                <p 
                className="text-[#002674] font-semibold text-xl cursor-pointer"
                    onClick={viewAllOnClick}
                >View all</p>

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
                            <th
                                className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-end">
                                More
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`py-2 px-4 border-b border-gray-200 text-left text-[#475569] `}
                                    >
                                        <h3 className={`${cellIndex === 1 ? ' bg-[#F2F3F5] rounded-full text-center w-[40] h-[40] ' : ''}`}>
                                           <span> {cell}</span>
                                        </h3>
                                    </td>
                                ))}
                                <td
                                    className="py-4 px-4 border-b border-gray-200 text-left text-[#475569] flex justify-end"

                                >
                                    <Image src="/more.svg" alt="more" width={8} height={13} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
