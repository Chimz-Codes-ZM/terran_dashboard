import React, { useEffect, useState, useContext } from "react";
import Layout from "../layouts/layout";
import Head from "next/head";
import MessageInput from "./MessageInput";
import ConversationList from "./conversationList";
import MessageList from "./MessageList";

import { JellyTriangle } from "@uiball/loaders";


const Inbox = () => {
  const [showChat, setShowChat] = useState(false);



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowChat(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <title>Inbox</title>
      </Head>
      <Layout sideHighlight="inbox">
        {showChat === false ? (
          <div className="flex h-screen items-center justify-center ">
            <JellyTriangle size={40} color="#231F20" />
          </div>
        ) : (
          <div className="flex custom-height">
            <MessageList />
            <ConversationList />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Inbox;
