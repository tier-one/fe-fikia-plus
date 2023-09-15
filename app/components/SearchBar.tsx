import Image from 'next/image';
import React from 'react'
import InputField from './InputField'

const inputFieldStylingProps = {
    container: {
      className: "flex flex-col space w-full",
    },
    inputlabel: {
      className: "text-base text-gray-600 font-light",
    },
    input: {
      className:
        "py-[10px] px-[16px] outline-none rounded-[39px] border border-[#05379C] bg-[#031F57] w-[250px] placeholder:text-gray-600",
    },
};

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center'>

        <div className='md:hidden flex text-white'>
          <Image 
            src='/search2.svg'
            width={20}
            height={20}
            alt='search icon'
          />
        </div>

        <InputField
            placeholder="Search anything here"
            required={false}
            type="text"
            name="first_name"
            className="text-xs hidden md:flex"
            {...inputFieldStylingProps}
        />

    </div>
  )
}

export default SearchBar