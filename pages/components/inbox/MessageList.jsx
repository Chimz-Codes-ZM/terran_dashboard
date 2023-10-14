import React, { useEffect, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from 'axios';

const MessageList = ({
  selectedConversation,
  onConversationClick,
 }) => {

  const router = useRouter()

const [conversations, setConversations] = useState(null)

    useEffect(() => {

      const token = localStorage.getItem("token");
  
      const decodedToken = jwt_decode(token);
      const id = decodedToken.user_id;
  
      async function fetchData() {
        try {
          const response = await axios.get(
            `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${id}/`
          );
          setConversations(response.data);
          console.log(response.data)
  
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
  
      fetchData();
    }, []);

    const handleConversationClick = (route) => {
      // Use router.push to navigate to the specified route
      router.push(route);
    };

  return (
    <div className="px-2 md:w-72 max-w-72 border-r">
      {conversations?.length > 0 ? (
        conversations.map((convo) => (
          <a href={convo.route} key={convo.id}>
          <div
            className={`flex gap-4 px-6 p-2 hover:bg-gray-100 transition-colors delay-150 ease-in cursor-pointer ${
              selectedConversation === convo.id ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="h-8 w-8 rounded-full relative bg-slate-600">
              <Image
                objectFit="cover"
                layout="fixed"
                fill
                src={convo.other_user_image}
                alt="Profile Picture"
                className="w-8 h-8 rounded-full mr-2"
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-sm">{convo.other_user}</h1>
            </div>
          </div>
          </a>
          
        ))
      ) : (
        <p>No conversations available.</p>
      )}
    </div>
  );
};

export default MessageList;
