import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/logo.png"
import Stock_image from "/public/stock image.webp";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaSlideshare } from "react-icons/fa";
import { GoInbox } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { FiBell } from "react-icons/fi";

const Inbox_layout = ({ children, sideHighlight }) => {
  return (
    <>
      <main className="h-screen w-screen flex relative">
        <nav className="sm:w-60 w-20 transition-all z-50 h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <div className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center">
              <div className="relative w-10 h-10 rounded">
                <Image src={Logo} priority alt="logo" fill />
              </div>
              <h1 className="font-bold text-gray-800 hidden sm:block">
                Baobabpad
              </h1>
            </div>

            <div className="h-full pl-5 pb-10 rounded-tr-2xl flex flex-col bg-gray-900 w-full justify-between">
              <div className="w-full h-max flex flex-col gap-2 pr-5 pt-10">
                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Tech Village"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : "hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <SiHomeassistantcommunitystore className="text-xl" />
                      <h1 className="hidden sm:block">Tech Village</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/connect">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "connect"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <MdOutlineConnectWithoutContact className="text-xl" />
                      <h1 className="hidden sm:block">Connect</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/sharepad">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "sharePad"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <FaSlideshare className="text-xl" />
                      <h1 className="hidden  sm:block">SharePad</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/inbox">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "inbox"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <GoInbox className="text-xl" />
                      <h1 className="hidden sm:block">Inbox</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/profile">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "profile"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <CgProfile className="text-xl" />
                      <h1 className="hidden sm:block">Profile</h1>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-full h-max rounded-r-full pt-5 pr-5">
                <div className="w-full flex flex-col">
                  <Link href="/" className="">
                  <div
                    className="flex transition-all duration-500 gap-3 flex items-center rounded px-2 py-1 text-gray-100 hover:font-bold hover:bg-gray-100 hover:text-gray-800 cursor-pointer "
                    // onClick={logoutHandler}
                  >
                    <BiLogOut className="text-xl logout" />
                    <h1 className="hidden sm:block">Logout</h1>
                  </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="fixed bg-white top-0 left-0 w-full h-20 px-14 gap-4 flex justify-end items-center z-40">
          <FiBell className="text-xl" />

          <Link href="/dashboard/settings">
            <div className="w-max truncate px-4 py-2 transition-all duration-500 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1 sm:gap-2 rounded">
              <div className="w-7 h-7 rounded overflow-hidden relative">
                <Image src={Stock_image} fill priority alt="user" />
              </div>

              <span className="text-sm truncate flex sm:max-w-[200px] font-bold">
                John Doe
              </span>
            </div>
          </Link>
        </nav>
        <div className="w-full h-screen scrollbar px-4 py-24">
          <div className="w-full h-max flex flex-col gap-5">{children}</div>
        </div>
      </main>
    </>
  );
}

export default Inbox_layout