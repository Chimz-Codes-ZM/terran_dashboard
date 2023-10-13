import React from "react";
import Head from "next/head";
import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import Link from "next/link";

const Careers = () => {
    return (
        <>

        <Layout sideHighlight="sharepad">
            <SharepadLayout title="careers">
                <div>Careers</div>
            </SharepadLayout>
        </Layout>
          
        </>
      );
}

export default Careers