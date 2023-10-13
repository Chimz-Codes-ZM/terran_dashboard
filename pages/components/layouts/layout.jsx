import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import ContextProvider from "../conext/context";

import axios from "axios";
import { signOut } from "next-auth/react";

import jwt_decode from "jwt-decode";

import Logo from "/public/logo.png";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaSlideshare } from "react-icons/fa";
import { GoInbox } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { useSession } from "next-auth/react";

const Layout = ({ children, sideHighlight }) => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      localStorage.setItem("token", session.access);
      // console.log(session);
    }

    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`
        );
        setUserData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <main className="h-screen w-screen flex relative">
        <nav className="sm:w-60 w-20 transition-all z-50 h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <div
              className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center cursor-pointer"
              onClick={signOut}
            >
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
                  <Link href="/">
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
                  <Link href="/connect">
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
                  <Link href="/sharepad">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "sharepad"
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
                  <Link href="/inbox">
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
                  <Link href="/profile">
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
                  <div href="/" className="" onClick={signOut}>
                    <div
                      className="flex transition-all duration-500 gap-3 flex items-center rounded px-2 py-1 text-gray-100 hover:font-bold hover:bg-gray-100 hover:text-gray-800 cursor-pointer "
                      onClick={handleLogout}
                    >
                      <BiLogOut className="text-xl logout" />
                      <h1 className="hidden sm:block">Logout</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="fixed bg-white top-0 left-0 w-full h-20 px-14 gap-4 flex justify-end items-center z-40">
          <AiOutlineBell className="text-lg" />

          <Link href="/profile/">
            <div className="w-max truncate px-4 py-2 transition-all duration-500 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1 sm:gap-2 rounded">
              <div className="w-7 h-7 rounded overflow-hidden relative">
                {userData ? (
                  <div>
                    <Image
                      src={userData[0]?.image}
                      objectFit="cover"
                      fill
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      className=" transition-opacity opacity-0 duration-[1.2s]"
                      alt="user"
                    />
                  </div>
                ) : (
                  <div>
                    <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-7 w-7"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
{/*  */}
              <span className="text-sm truncate flex sm:max-w-[200px] font-bold">
                {userData &&
                  (userData[0]?.account_type === "village talent profile" ||
                  userData[0]?.account_type === "village admin profile" ? (
                    <div>
                      {userData[0]?.first_name} {userData[0]?.last_name}
                    </div>
                  ) : (
                    <div>{userData[0]?.company_name}</div>
                  ))}
              </span>
            </div>
          </Link>
        </nav>
        <div className="w-full h-screen overflow-y-scroll px-4 py-24">
          <div className="w-full h-max flex flex-col gap-5">{children}</div>
        </div>
      </main>
    </>
  );
};

export default function WrappedLayout(props) {
  return (
    <middleware>
      <ContextProvider>
        <Layout {...props} />
      </ContextProvider>
    </middleware>
  );
}
