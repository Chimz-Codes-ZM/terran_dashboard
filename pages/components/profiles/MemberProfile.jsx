import React from 'react'
import Image from "next/image";
import { useRouter } from "next/router";



const MemberProfile = ({
    image,
    name,
    skills,
    showProfile,
    country,
    experience,
    certificate,
    user_id
  }) => {

    const router = useRouter();


    const handleShowProfile = () => {
        showProfile({ image, name, skills, country, experience, certificate, user_id });
      };


      return (
        <div className="text-center cursor-pointer " onClick={handleShowProfile}>
          <div className="rounded border md:max-w-[19.8rem] max-h-80 md:h-80 overflow-hidden">
            <Image
              src={image}
              alt="profile image"
              layout="responsive"
              objectFit="cover"
              className=" transition-opacity opacity-0 duration-[1.2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              width={500}
              height={500}
            />
          </div>
          <h1 className="font-semibold">{name}</h1>
          <h3 className="font-light italic">{skills}</h3>
        </div>
      );
}

export default MemberProfile