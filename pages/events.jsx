import React from "react";
import Head from "next/head";
import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import Link from "next/link";


const Events = () => {
  return (
    <>

    <Layout sideHighlight="sharepad">
        <SharepadLayout title="events">
            <div>Events</div>
        </SharepadLayout>
    </Layout>
      
    </>
  );
};

export default Events;
