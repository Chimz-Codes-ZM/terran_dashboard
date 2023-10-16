import React, { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import ContextProvider from "../conext/context";
import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";
import { signOut } from "next-auth/react";

import jwt_decode from "jwt-decode";

import Logo from "/public/Terran Community Logo.png";
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
  const [unreadMessageCount, setUnreadMessageCount] = useState(null)
  const [notificationContent, setNotificationContent] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [id, setId] = useState("")
  const router = useRouter();
  const notificationRef = useRef();


  const { data: session } = useSession();

  const handleClickOutsideNotification = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotification(false);
    }
  };

  useEffect(() => {
    if (session) {
      localStorage.setItem("token", session.access);
      // console.log(session);
    }

    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    setId(decodedToken.user_id)
    const user_id = decodedToken.user_id
  

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${user_id}/`
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
    document.addEventListener("mousedown", handleClickOutsideNotification);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);

    };
  }, []);
  

  const { readyState, sendJsonMessage } = useWebSocket(`wss://baobabpad-334a8864da0e.herokuapp.com/ws/chat_notifications/${id}/`, 
  {
    onOpen: () => {
      console.log("Connected to Notifications!");
    },
    onClose: () => {
      console.log("Disconnected from Notifications!");
    },
    onMessage: (e) => {
      const data = JSON.parse(e.data);
      switch (data.type) {
        case "unread_count":

          break;
        case "new_message_notification":
          setUnreadMessageCount((count) => (count += 1));
          setUnreadMessageCount(data.count)
          console.log(data.content)
          setNotificationContent(data.content)
          break;
        default:
          console.error("Unknown message type!");
          break;
      }
    },
    retryOnError: true,
  }
  )

  const handleSendNotification = () => {
    sendJsonMessage({
      type: "read_notifications",
    });
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
    sendJsonMessage({
      type: "read_messages",
    });
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  return (
    <>
      <main className="h-screen w-screen flex relative">
        <nav className="sm:w-60 w-20 transition-all z-50 h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <Link href="/"
              className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center cursor-pointer"
            >
              <div className="relative md:h-20 md:w-40 h-10 w-20 rounded">
                <Image src={Logo} priority alt="logo" fill />
              </div>
            </Link>

            <div className="h-full pl-5 pb-10 rounded-tr-2xl flex flex-col bg-black w-full justify-between">
              <div className="w-full h-max flex flex-col gap-2 pr-5 pt-10">
                <div className="w-full flex flex-col">
                  <Link href="/">
                    <div
                      className={`flex transition-all duration-500  gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Tech Village"
                          ? "font-bold bg-gray-100 text-black"
                          : "hover:font-bold text-white hover:bg-gray-100 hover:text-black"
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
                        ? "font-bold bg-gray-100 text-black"
                        : "hover:font-bold hover:bg-gray-100 hover:text-black"
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
                        ? "font-bold bg-gray-100 text-black"
                        : "hover:font-bold hover:bg-gray-100 hover:text-black"
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
                      className={`flex transition-all duration-500 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "inbox"
                        ? "font-bold bg-gray-100 text-black"
                        : "hover:font-bold text-white hover:bg-gray-100 hover:text-black"
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
                        ? "font-bold bg-gray-100 text-black"
                        : "hover:font-bold hover:bg-gray-100 hover:text-black"
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
                  <div className="cursor-pointer" onClick={() => signOut()}>
                    <div
                      className="flex transition-all duration-500 gap-3 flex items-center rounded px-2 py-1 text-gray-100 hover:font-bold hover:bg-gray-100 hover:text-black cursor-pointer "
                      
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
          {/* {connectionStatus} */}
          <div className="relative"><AiOutlineBell className="text-lg cursor-pointer" onClick={handleShowNotification}/>
            <div className="absolute -top-2 -right-2">{unreadMessageCount > 0 ? unreadMessageCount : ""}</div>
            <div ref={notificationRef}>
              <div className="relative">
  <div
    className="inline-flex items-center overflow-hidden rounded-md border bg-white"
  >
  </div>
  {showNotification && (
  <div
    className="absolute end-0 z-10 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
    role="menu"
  >
    {notificationContent && notificationContent.length > 0 ? (
      notificationContent.map((notification, index) => (
        <div className="p-2" key={index}>
          <Link href={`/${notification.route}`}>
            <div
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              {notification.message}
            </div>
          </Link>
        </div>
      ))
    ) : (
      <div className="p-2">
        No notifications.
      </div>
    )}
  </div>
)}


</div>
</div>
          </div>
          

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
