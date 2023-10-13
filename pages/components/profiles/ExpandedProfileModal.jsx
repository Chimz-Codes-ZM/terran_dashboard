import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsFillChatQuoteFill, BsInfoSquare } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";


const ExpandedProfileModal = ({
  image,
  name,
  skills,
  hideProfile,
  experience,
  certificate,
  country,
  onClick,
  handleChat
}) => {

  const router = useRouter();

  const handleMoreInfoClick = (modalId) => {
    router.push(`/virtual_tech_village/member_profile/${modalId}`);
  };


  return (
    <div className="">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md relative">
              <Image
                src={image}
                alt={name}
                objectFit="cover"
               fill
              

                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                className=" transition-opacity opacity-0 duration-[1.2s]"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline w-full"
              >
                <BsLinkedin className="w-8 h-8" />
              </a>
              
                <div className="text-blue-500 hover:underline cursor-pointer w-full" onClick={onClick}>
                  <BsInfoSquare className="w-8 h-8" />
                </div>

                <div className="text-blue-500 hover:underline cursor-pointer w-full" onClick={handleChat}>
                  <BsFillChatQuoteFill className="w-8 h-8"/>
                </div>
              
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-8">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <h3 className="text-sm font-light italic text-gray-600">
                {skills}
              </h3>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Completed Courses</h2>
                <p className="text-sm font-light italic">{certificate}</p>
              </div>
              <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Experience</h2>
                <p className="text-sm font-light italic">{experience}</p>
              </div>
              <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Country</h2>
                <p className="text-sm font-light italic">{country}</p>
              </div>
              <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Resources</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div
          className="absolute top-4 right-4 text-gray-600 cursor-pointer"
          onClick={hideProfile}
        >
          <IoMdCloseCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ExpandedProfileModal;
