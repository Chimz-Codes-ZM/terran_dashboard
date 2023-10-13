import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layouts/layout";
import { BsLinkedin, BsFillChatQuoteFill } from "react-icons/bs";
import { JellyTriangle } from "@uiball/loaders";
import { useRouter } from "next/router";
import { usePDF } from "react-to-pdf";
import Resume_component from "../components/Resume_component/Resume_component";
import { NextPage } from "next";

const MemberInfo = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { id } = router.query;
  const [error, setError] = useState(null);

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}`;

    fetch(userInfoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((responseData) => {
        setInfo(responseData);

        setTimeout(function () {
          setLoading(false);
        }, 2000);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    console.log(info);
  }, [info]);

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }
  return (
    <>
      <Layout sideHighlight="Tech Village">
        <Resume_component
          name={`${info[0]?.first_name} ${info[0]?.last_name}`}
          bio={info[0]?.bio}
          country={info[0]?.country}
          city={info[0]?.city}
          title={info[0]?.skills}
          job1={info[0]?.work_experience[0]?.company}
          position1={info[0]?.work_experience[0]?.position}
          work_experience={info[0]?.work_experience}
          education={info[0]?.education}
          languages={info[0]?.languages}
          linkedin={info[0]?.link}
          soft_skills={info[0]?.soft_skills}
        />

        <div
          className="px-1 rounded border cursor-pointer w-fit bg-gray-900 text-white"
          onClick={() => toPDF()}
        >
          Download
        </div>
      </Layout>
    </>
  );
};

export default MemberInfo;
