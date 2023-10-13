import React from "react";
import Layout from "./components/layouts/layout";
import Head from "next/head";
import SharepadLayout from "./components/layouts/sharepadLayout";
import Link from "next/link";

const sharepad = () => {
  return (
    <>

      <Layout sideHighlight="sharepad">
        <SharepadLayout title="knowledgehub">
          <div>sharapad</div>
        </SharepadLayout>
      </Layout>
    </>
  );
};

export default sharepad;
