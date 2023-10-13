import React, { useEffect, useState, useContext } from "react";
import Layout from "./components/layouts/layout";
import Head from "next/head";
import Inbox from "./components/inbox/inbox";
import  ContextProvider  from "./components/conext/context";
import Link from "next/link";

const inbox = () => {
  return (
    <>

      <ContextProvider>
        <Inbox />
      </ContextProvider>
    </>
  );
};

export default inbox;
