"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function ProfileButton() {
  const [openModal, setOpenModal] = useState(false);
  const {data: session} = useSession();
  
  

  return (
    <div className="flex justify-center items-center z-10 flex-col relative">
      <Menu as="div">
            <Menu.Button className="flex justify-center items-center" onMouseEnter={() => setOpenModal(true)} >
                <div className='bg-cyan-300 px-5 py-3 rounded-full cursor-pointer'>
                  <p className='text-black'>F</p>
                </div>
            </Menu.Button>

            <Transition
              show={openModal}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="flex justify-center items-center flex-col absolute lg:right-[-70px] right-0  mt-3 p-7 sm:min-w-[300px] min-w-max rounded-xl bg-white border border-[#EBEAEA] shadow-menu"
                onMouseLeave={() => setOpenModal(false)}
              >
                <div className="flex flex-col items-center gap-y-4">
                    <div onClick={() => signOut()} className='bg-cyan-300 w-[80px] h-[80px] flex justify-center items-center rounded-full cursor-pointer'>
                      <p className='text-black font-semibold text-[30px]'>F</p>
                    </div>
                    <p className="font-semibold text-black">{session?.user?.email}</p>
                </div>

                <div className="flex flex-col gap-3 pt-10 items-start w-full text-black">
                  <Menu.Item>
                      <div className="text-sm">Profile</div>
                  </Menu.Item>
                </div>
                <div className="w-full flex items-center justify-start border-t border-[#EBEAEA] mt-5 pt-5">
                  <Menu.Item>
                      <button type="button" className="text-sm text-black" onClick={() => signOut()}> 
                          Sign out
                      </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
      </Menu>
    </div>
  )
}
