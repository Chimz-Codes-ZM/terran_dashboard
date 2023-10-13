import React from "react";
import Layout from "./components/layouts/layout";
import Head from "next/head";
import SharepadLayout from "./components/layouts/sharepadLayout";
import Link from "next/link";


const Resources = () => {
    return (
        <>

          <Layout sideHighlight="sharepad">
            <SharepadLayout title="resources">
              <div>Resources</div>
            </SharepadLayout>
          </Layout>
        </>
      );
}

export default Resources