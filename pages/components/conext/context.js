import React, { createContext, useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const Context = createContext();

export default ContextProvider;

function ContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState(null);
  const [secret, setSecret] = useState(null);
  const [userCredentials, setUserCredentials] = useState(false);
  const email = userData ? `${userData[0].email}` : "";
  const userId = userData ? `${userData[0].user_id}` : "";

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      localStorage.setItem("token", session.access);
      // console.log(session);
    }
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`
        );
        setUserData(response.data);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    // fetchData();
  }, []);

  const value = {
    username,
    secret,
    userCredentials,
    userId
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}