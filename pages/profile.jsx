import React, { useState } from "react";
import Layout from "./components/layouts/layout";
import Profile_layout from "./components/layouts/Profile_layout";
import { FcPicture } from "react-icons/fc";
import Link from "next/link";
import Head from "next/head";
import Resume_component from "./components/Resume_component/Resume_component";

const profile = () => {

  return (
    <>
      <Layout sideHighlight="profile">
        <Profile_layout title="view profile">
          <Resume_component />
        </Profile_layout>
      </Layout>
    </>
  );
};

export default profile;
