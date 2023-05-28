import React from "react";
import Image from "next/image";

interface CardProps {
    title?: string;
    icon: string;
    amount: number;
    change: number;
    changeIcon: string;
    period: string;
}

const Card = ({
    title,
    icon,
    amount,
    change,
    changeIcon,
    period,
}: CardProps) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg ">
        <div className="flex justify-between mx-4">
            <p className="text-xl mb-2 text-[#475569]">{title}</p>
            <Image src={icon} width={20} height={20} alt="client" />
        </div>
        <div className="mx-4 text-[#475569] font-bold text-4xl">
            <p>{amount}</p>
        </div>
        <div className="px-4 py-4 flex">
            <Image src={changeIcon} alt="increase" width={13} height={13} />
            <p className="text-[#22C45E] ml-2">
                {change > 0 ? "+" : change < 0 ? "-" : ""}
                {change} % <span className="text-[#93A2B7]"> from {period}</span>
            </p>
        </div>
    </div>
);

export default Card;
