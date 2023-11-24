import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface FundTopBarProps {
  newTransactionName: string;
  openFormOnclick: () => void;
  exportOnclick: () => void;
  fundId?: string;
  isButtonVisible?: boolean;
}

const inputFieldStylingProps = {
  container: {
    className: "flex flex-col space ",
  },
  inputlabel: {
    className: "text-base text-gray-600 font-light",
  },
  input: {
    className:
      "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
  },
};

const FundTopBar = ({
  newTransactionName,
  openFormOnclick,
  exportOnclick,
  fundId,
  isButtonVisible,
}: FundTopBarProps) => {
  return (
    <div className="flex justify-end w-3/4 " >
      <div className="relative w-1/2 mt-2">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Image
            src="/search.svg"
            className="text-gray-500"
            alt="search"
            width={20}
            height={20}
          />
        </span>
        <input
          type="text"
          className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full"
          placeholder="Search"
        />
      </div>

      {isButtonVisible && (
        <Button
          value={newTransactionName}
          styling="bg-[#002674] text-white py-3 px-4 mt-1 ml-4 rounded-lg"
          onClick={openFormOnclick}
          isDisabled={false}
        />
      )}
      <Button
        value="export"
        icon="/export.svg"
        styling="bg-white text-[#002674] py-2 px-4 mt-2 ml-4 rounded-lg border border-[#002674]"
        onClick={exportOnclick}
        isDisabled={false}
      />
    </div>
  );
};

export default FundTopBar;
