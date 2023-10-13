import React, { useState, useEffect } from "react";
import Layout from "./components/layouts/layout";
import { FcPicture } from "react-icons/fc";
import Link from "next/link";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

import { countries } from "./data/index";

const Complete_company_profile = () => {
  const [completedProfile, setCompletedProfile] = useState({
    country: "",
    company_website: "",
    industry: "",
    company_description: "",
    social_media_profiles: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setCompletedProfile((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCompletedProfile({
      ...completedProfile,
      [name]: value,
    });
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const imageData = new FormData();
    const file = e.target.files[0];

    if (!file) {
      alert("Please select an image before submitting.");
      return;
    }

    setSelectedFile(file);

    imageData.append("file", file);

    const response = await fetch(
      // `https://baobabpad-334a8864da0e.herokuapp.com/village/complete_profile/${user_id}/`,
      `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "PUT",
        body: imageData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log({ completedProfile });
  }, [completedProfile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const response = await fetch(
      // `https://baobabpad-334a8864da0e.herokuapp.com/village/complete_profile/${user_id}/`,
      `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completedProfile }),
      }
    );
    if (response.ok) {
      alert("Profile update complete!");
      router.push("/virtual_tech_village");
    } else {
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <>

      <Layout>
        <div className="w-full flex justify-center flex-col">
          {/* Gray background */}

          <div className="w-full bg-gray-50 h-40 overflow-auto"></div>

          <div className="relative">
            {/* Profile Picture and button */}
            <div className="flex items-center justify-between absolute w-full px-10 -top-5">
              <div className="rounded-full border shadow h-20 w-20 flex justify-center items-center text-6xl overflow-hidden">
                {completedProfile.selectedImage ? (
                  <img
                    src={completedProfile.selectedImage}
                    alt="Profile picture"
                    width={160}
                    height={160}
                    layout="responsive"
                  />
                ) : (
                  <FcPicture />
                )}
              </div>
              <div className="text-white bg-black rounded h-min">
                <div
                  class="group relative inline-block text-sm cursor-pointer font-medium text-gray-900 focus:outline-none focus:ring active:text-gray-900"
                  href=""
                >
                  <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <Link
                    href={"/virtual_tech_village/profile/"}
                    class="relative block border border-current bg-white px-6 py-3"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full px-10 pt-24 pb-4 items-center justify-between border-b-2">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-2xl">
                  Tech Village Company Profile
                </h2>
                <p>Set company details here</p>
              </div>

              <div className="flex gap-4">
                <div className="cursor-pointer rounded p-2 py-1 hover:text-white hover:bg-black transition-colors border shadow duration-300">
                  Cancel
                </div>
                <div className="cursor-pointer rounded p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:border hover:shadow duration-300">
                  Save Changes
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleImageSubmit}>
                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 border-b-2">
                  <div className="flex flex-col gap-3 col-span-1">
                    <h2 className="font-semibold text-xl">Company logo</h2>
                    <p>Start by setting your company logo here</p>
                  </div>

                  <div className="flex flex-col items-center col-span-1">
                    <label
                      htmlFor="profilePictureInput"
                      className="border-2 border-dashed px-4 border-gray-400 overflow-hidden rounded-lg cursor-pointer"
                    >
                      {/* Render the image here if available */}

                      {selectedFile ? (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          className="w-30 h-40"
                          cover
                          fill
                        />
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-gray-400 mb-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm0-7a3 3 0 11-6 0 3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-gray-500">Click to add image</p>
                        </>
                      )}

                      <input
                        id="profilePictureInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        name="file"
                        onChange={handleImageSubmit}
                      />
                    </label>
                  </div>
                </div>
              </form>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="experience"
                    className="font-semibold text-xl col-span-1"
                  >
                    Country:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <select
                      name="country"
                      id="country"
                      value={completedProfile.country}
                      onChange={handleInputChange}
                      className="border rounded p-1 w-full"
                      required
                    >
                      <option value="" disabled selected>
                        Select a country
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="professional_profile"
                    className="font-semibold text-xl col-span-1"
                  >
                    Company website:
                  </label>
                  <div className="flex col-span-1">
                    <input
                      type="text"
                      className="border rounded-r p-1 w-full"
                      name="company_website"
                      onChange={handleInputChange}
                      placeholder="e.g., wwww.example.com"
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="experience"
                    className="font-semibold text-xl col-span-1"
                  >
                    Industry:
                  </label>
                  <div className="flex col-span-1">
                    <input
                      type="text"
                      placeholder="e.g., Tech"
                      className="border rounded p-1 w-full"
                      name="industry"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="certs_courses"
                    className="font-semibold text-xl col-span-1"
                  >
                    Company description:
                  </label>
                  <div className="flex col-span-1">
                    <textarea
                      type="text"
                      placeholder="Write a brief 1-2 sentence description of your company"
                      className="border rounded p-1 w-full"
                      name="company_description"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="social_media_profiles"
                    className="font-semibold text-xl col-span-1"
                  >
                    Social Media profile
                  </label>
                  <div className="flex col-span-1">
                    <input
                      type="text"
                      placeholder="e.g., www.instagram.com"
                      className="border rounded p-1 w-full"
                      name="social_media_profiles"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3">
                  <div className="col-span-2"></div>
                  <div className="col-span-1 flex justify-end px-10 pt-10">
                    <div className="flex gap-4">
                      <button
                        className="cursor-pointer rounded p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:shadow-md duration-300"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Complete_company_profile;
