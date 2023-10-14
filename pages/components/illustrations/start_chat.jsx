import React from 'react'
import Start_chat_illustration from "../../../public/illustrations/start_chat.png";
import Image from 'next/image';

import { TiArrowLeftThick } from "react-icons/ti"

const Start_chat = () => {
  return (
    <div className='relative w-full h-full flex flex-col'>
        <div className='w-full flex p-4 text-3xl justify-center'>< TiArrowLeftThick/> {" "}Select A Conversation To Start Chatting</div>
        <div className='flex flex-col relative h-full max-h-[800px]'>
            <Image 
            objectFit="cover"
            layout="fixed"
            fill
            src={Start_chat_illustration}
            alt="Profile Picture"
            className=""
            />
        </div>
        
    </div>
  )
}

export default Start_chat
