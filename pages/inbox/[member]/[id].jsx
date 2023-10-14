import React, { useEffect, useState, useContext, useRef } from "react";
import Layout from "../../components/layouts/layout";
import Head from "next/head";
import Inbox from "../../components/inbox/inbox";
import MessageInput from "../../components/inbox/MessageInput";
import { Context, ContextProvider } from "../../components/conext/context";
import { useRouter } from "next/router";
import { JellyTriangle } from "@uiball/loaders";
import { useSession } from "next-auth/react";
import jwt_decode from "jwt-decode";
import MessageList from "../../components/inbox/MessageList";
import ConversationList from "../../components/inbox/conversationList";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Toolbar from "../../components/inbox/Toolbar";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

const Index = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [chatName, setChatName] = useState(null);

  const [message, setMessage] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);
  const [hasMoreMessages, setHasMoreMessages] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [conversation, setConversation] = useState(null);
  const [page, setPage] = useState(2);
  const [meTyping, setMeTyping] = useState(false);
  const [typing, setTyping] = useState(false);

  // MESSAGE INPUT STATE
  const [messageText, setMessageText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const usersName = chatName ? chatName : ""
  const userPicture = avatarUrl ? avatarUrl : ""

  // WEBSOCKET CONNECTION

  const uniqueRoom = `_${id}`;
  const userId =
    userData && userData.length > 0 ? `${userData[0].user_id}` : "";

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

  const currentSignedInName = `${userData[0]?.first_name} ${userData[0]?.last_name}`



  const { readyState, sendMessage, sendJsonMessage } = useWebSocket(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/chat/${userId}/${userId}${uniqueRoom}/`,
    {
      onOpen: () => {
        console.log("Connected");
        sendJsonMessage({
          type: "read_messages",
        });
      },
      onClose: () => {
        console.log("Disconnected!");
      },

      retryOnError: true,

      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "chat_message_echo":
            setMessageHistory((prev) => [...prev, data.message]);

            break;

          case "last_50_messages":
            console.log("Updated messageHistory:", messageHistory);
            setMessageHistory((prev) => [...data.messages, ...prev]);

            setHasMoreMessages(data.has_more);
            break;
          case "user_join":
            console.log("User joined the conversation:", data.user)
            setParticipants((pcpts) => {
              if (!pcpts.includes(data.user)) {
                return [...pcpts, data.user];
              }
              return pcpts;
            });
          
            break;
          case "user_leave":
            setParticipants((pcpts) => {
              const newPcpts = pcpts.filter((x) => x !== data.user);
              return newPcpts;
            });
            break;
          case "online_user_list":
            setParticipants(data.users);
            break;
          case "typing":
            updateTyping(data);
            break;
          default:
            console.error("Unknown message type!");
            break;
        }
        console.log(data);
      },
    }
  );

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`;

    try {
      const response = await fetch(userInfoUrl);
      const responseData = await response.json();

      setInfo(responseData);
      setChatName(`${responseData[0].first_name} ${responseData[0].last_name}`);
      setAvatarUrl(responseData[0].image);

      setTimeout(function () {
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) 
   }

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {});

  }, [router]);

  useEffect(() => {
scrollToBottom()
  }, [messageHistory])

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  return (
    <>
      <Layout sideHighlight="inbox">
        <div className="flex custom-height">
          <div className="hidden lg:block"><MessageList /></div>
          

          {/* CONVERSATION LIST */}

          <div className="relative grow shadow overflow-hidden h-full flex justify-center">
            <div className="grow relative p-4 py-1 overflow-hidden max-h-[450px] pt-10 max-w-3xl">
              <Toolbar names={usersName} avatar={userPicture} />
              <div className="scrollbar h-full">
                <div
                  className="mx-auto max-w-6xl px-14 py-4 pb-4 max-h-full overflow-y-auto"

                >
                  <div className="">
                    {messageHistory.length > 0 && (
                      <div className="message-list flex flex-col gap-1">
                        {messageHistory.map((message, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 w-full"
                          >
                            {message.from_user?.email === userData[0].email && (
                              <div className="self-end  p-1 px-3 rounded-lg bg-slate-800 text-white">
                                {message.content}
                              </div>
                            )}
                            {message.from_user?.email !== userData[0].email && (
                              <div className="p-1 px-3 rounded-lg bg-white text-gray-800 shadow justify-start self-start">
                                {message.content}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>
            <MessageInput roomName={uniqueRoom} userId={userId} />
          </div>

          {/* {connectionStatus} */}
          {/* END OF CONVERSATION LIST */}
        </div>
      </Layout>
    </>
  );
};

export default Index;
