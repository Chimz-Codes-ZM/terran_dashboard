import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Profile_layout from "./Profile_layout";
import Layout from "./layouts/layout";
import { FcPicture } from "react-icons/fc";
import Link from "next/link";
import jwt_decode from "jwt-decode";

import { techPositions } from "@/pages/data";
import { countries } from "@/pages/data";
import profile from "../profile";

const Edit_profile_component = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState({});
  const [completedProfile, setCompletedProfile] = useState({
    country: "",
    professional_profile: "",
    experience: "",
    certificates: "",
    skills: "",
    goals: "",
    quote: "",
    bio: "",
  });

  const [resetPassword, setResetPassword] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [previousData, setPreviousData] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const imageData = new FormData();
    const file = e.target.files[0];

    if (!file) {
      alert("Please select an image before submitting");
      return;
    }

    setSelectedFile(file);

    imageData.append("file", file);

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/village/complete_profile/${user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCompletedProfile({
      ...completedProfile,
      [name]: value,
    });
    console.log(completedProfile);
  };

  const handleResetPasswordChange = (e) => {
    const { name, value } = e.target;

    setResetPassword({
      ...resetPassword,
      [name]: value,
    });
    console.log(resetPassword);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;
  
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/complete_profile/${user_id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to fetch profile data. Status: ${response.status}`);
        }
  
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
        // Handle the error as needed, e.g., set an error state or show a message to the user
      }
    };
  
    fetchData();
  }, []);  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/village/complete_profile/${user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
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
      localStorage.removeItem("user_id");
      router.push("/virtual_tech_village");
    } else {
      alert("Something went wrong, please try again!");
    }

    console.log(completedProfile);
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/api/change_password/${user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetPassword }),
      }
    );
    if (response.ok) {
      alert("Password reset complete!");
      localStorage.removeItem("user_id");
      // router.push("/virtual_tech_village");
    } else {
      alert("Something went wrong, please try again!");
    }

    console.log(completedProfile);
  };
  return (
    <Layout sideHighlight="profile">
      <Profile_layout title="edit profile">
        <div className="w-full flex justify-center flex-col">
          {/* Gray background */}

          <div className="w-full bg-gray-50 h-40 overflow-auto"></div>

          <div className="relative">
            {/* Profile Picture and button */}
            <div className="flex items-center justify-between absolute w-full px-10 -top-5">
              <div className="rounded-full border shadow h-20 w-20 flex justify-center items-center text-6xl">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
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
                  className="group relative inline-block text-sm cursor-pointer font-medium text-gray-900 focus:outline-none focus:ring active:text-gray-900"
                  href=""
                >
                  <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <Link href="/virtual_tech_village/profile">
                    <span className="relative block border border-current bg-white px-6 py-3">
                      View Profile
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full px-10 pt-24 pb-4 items-center justify-between border-b-2">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-2xl">Tech Village Profile</h2>
                <p>Set your details here</p>
              </div>

              <div className="flex gap-4">
                <div className="cursor-pointer  p-2 py-1 hover:text-white hover:bg-black transition-colors border shadow duration-300">
                  Cancel
                </div>
                <div className="cursor-pointer  p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:border hover:shadow duration-300">
                  Save Changes
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleImageSubmit}>
                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 border-b-2">
                  <div className="flex flex-col gap-3 col-span-1">
                    <h2 className="font-semibold text-xl">Profile picture</h2>
                    <p>Edit your profile picture here</p>
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
                    Professional profile:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <span className="border rounded-l p-1 text-gray-900">
                      <h1>www.linkedin.com/in/</h1>
                    </span>
                    <input
                      type="text"
                      className="border rounded-r p-1 w-full"
                      name="professional_profile"
                      placeholder={
                        profileData.professional_profile
                          ? profileData.professional_profile
                          : ""
                      }
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="experience"
                    className="font-semibold text-xl col-span-1"
                  >
                    Skills:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <select
                      name="skills"
                      id="skills"
                      value={completedProfile.skill}
                      onChange={handleInputChange}
                      className="border rounded p-1 w-full"
                      required
                    >
                      {techPositions.map((role, index) => (
                        <option key={index} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="experience"
                    className="font-semibold text-xl col-span-1"
                  >
                    Experience:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <input
                      type="text"
                      placeholder={
                        profileData.experience
                          ? profileData.experience
                          : "e.g., 5 years"
                      }
                      className="border rounded p-1 w-full"
                      name="experience"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="certs_courses"
                    className="font-semibold text-xl col-span-1"
                  >
                    Courses or certifications:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <input
                      type="text"
                      placeholder={
                        profileData.certificates
                          ? profileData.certificates
                          : "e.g., CIMA"
                      }
                      className="border rounded p-1 w-full"
                      name="certificates"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="bio"
                    className="font-semibold text-xl col-span-1"
                  >
                    Bio
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <textarea
                      id="bio"
                      type="text"
                      className="mt-2 w-full rounded-lg border p-1 border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="4"
                      name="bio"
                      placeholder="Enter your bio here..."
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="bio"
                    className="font-semibold text-xl col-span-1"
                  >
                    Goals
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <textarea
                      id="goals"
                      className="mt-2 w-full rounded-lg border p-1 border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="4"
                      name="goals"
                      type="text"
                      placeholder="Enter your goals here..."
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 ">
                  <label
                    htmlFor="quote"
                    className="font-semibold text-xl col-span-1"
                  >
                    Qoute:
                  </label>
                  <div className="flex col-span-2 md:col-span-1">
                    <textarea
                      id="quote"
                      className="mt-2 w-full rounded-lg border p-1 border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="4"
                      name="quote"
                      type="text"
                      placeholder="Enter your bio here..."
                      onChange={handleInputChange}
                    ></textarea>
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

        <div className="border border-orange-400 p-3 w-full mt-4 rounded ">
          <div className="font-semibold text-xl w-fit self-center">
            <h2>Reset Password</h2>
          </div>
          <form onSubmit={handleResetSubmit} className="grid grid-cols-3 gap-4">
            <div className="grid grid-cols-2 gap-2 col-span-2">
              <label htmlFor="current_password">Current Password</label>
              <input
                type="password"
                name="current_password"
                value={resetPassword.current_password}
                onChange={handleResetPasswordChange}
                placeholder="Current Password"
                className="border rounded px-2"
                id="current_password"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 col-span-2">
              <label htmlFor="new_password">New Password</label>
              <input
                type="password"
                name="new_password"
                value={resetPassword.new_password}
                onChange={handleResetPasswordChange}
                placeholder="New Password"
                className="border rounded px-2"
                id="new_password"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 col-span-2">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={resetPassword.confirm_password}
                onChange={handleResetPasswordChange}
                placeholder="Confirm Password"
                className="border rounded px-2"
                id="confirm_password"
              />
            </div>

            <button onClick={handleResetSubmit} className="border px-2 rounded w-fit text-white bg-black">Submit</button>
          </form>
        </div>
      </Profile_layout>
    </Layout>
  );
};

export default Edit_profile_component;
