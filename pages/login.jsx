import React, { useState, useEffect } from "react";
import Image from "next/image";
import Terran_Logo from "/public/Terran Community Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

import { signIn, getSession, getProviders } from "next-auth/react";


function Login() {
  const [email_, setEmail] = useState("");
  const [password_, setPassword] = useState("");

  const [isRattling, setIsRattling] = useState(false);

  const [loginError, setLoginError] = useState(null);
  const handleLoginError = () => {
    setLoginError(true);
    setIsRattling(true);

    setTimeout(() => {
      setIsRattling(false);
    }, 1000);
  };

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocusedInput("");
    }
  };

  const [focusedInput, setFocusedInput] = useState("");

  //redux login state

  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;



  const onChange = (e) => {
    setLoginError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("Before token fetch");

  //   // const response = await fetch("http://127.0.0.1:8000/api/token/", {
  //   const response = await fetch(
  //     "https://baobabpad-334a8864da0e.herokuapp.com/api/token/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: username,
  //         password: password,
  //       }),
  //     }
  //   );


  //   const data = await response.json();

  //   if (response.ok) {
  //     localStorage.setItem("token", data.access);

  //     const token = data.access;
  //     const decodedToken = jwt_decode(token);
  //     const id = decodedToken.user_id;

  //     // const response = await fetch(`http://127.0.0.1:8000/api/user_type/${id}/`, {
  //     const response = await fetch(
  //       `https://baobabpad-334a8864da0e.herokuapp.com/api/user_type/${id}/`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       // console.log(response.text());

  //       const responseData = await response.text();

  //        if (responseData === `"company profile"`|| responseData === `"talent profile"`) {
          
  //         router.push("/dashboard");
  //       }
         
  //       else if (responseData === `"village profile"`) {
          
  //         router.push("/virtual_tech_village");
  //       }
  //       else if (responseData === `"village company profile"`) {
          
  //         router.push("/virtual_tech_village");
  //       }
  //     } else {
  //       // Handle error cases (e.g., network errors)
  //       handleLoginError();
  //     }
  //   }
  // };

  const handleLoginUser = async (e) => {    
    e.preventDefault();
    await signIn("credentials", {
      redirect: false,
      email: formData.username,
      password: formData.password
    })

    router.push("/")
  }


  return (
    <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 border h-screen relative">
      {loginError && (
        <div
          role="alert"
          className={`rounded border-s-4 border-red-500 bg-red-50 p-4 fixed bottom-10 sm:left-10 z-50 max-w-[450px] ${
            isRattling ? "animate-rattle" : ""
          }`}
        >
          <strong className="block font-medium text-red-800">
            {" "}
            Something went wrong{" "}
          </strong>

          <p className="mt-2 text-sm text-red-700">
            Email or password incorrect
          </p>
        </div>
      )}
      <div className="w-1/3 relative border h-full rounded-l-xl overflow-hidden hidden relative md:flex items-center justify-center">
        <Image
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="logo tree"
          className="h-full object-cover z-10 absolute"
          fill
        />
       
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 h-full relative">
        <div className="absolute left-1/2 transform -translate-x-1/2  top-6 z-50">
          <Link href={"/"}>
            <Image src={Terran_Logo} alt="Terran logo" className="h-28"/>
          </Link>
        </div>
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col gap-4 w-full h-full border border-l-teal-700 md:border-l-slate-50 border-r-teal-700 border-y-teal-700 p-4 py-8 rounded-l-xl md:rounded-l-none rounded-r-xl justify-center relative"
        >
          <h1 className="text-center text-2xl pb-4">Login</h1>

          <div className="relative">
            <input
              id="username"
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full border-b py-1 transition-colors focus:border-b-2 focus:border-teal-700 focus:outline-none peer"
              name="username"
              // placeholder='Username*'
              onChange={onChange}
              value={username}
              required
            />
            <label
              htmlFor="username"
              className={`absolute left-0 cursor-text ${
                username || focusedInput === "username"
                  ? "text-teal-700 text-xs -top-3"
                  : "-top-0 text-sm"
              } transition-all duration-300`}
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              // onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full border-b py-1 transition-colors focus:border-b-2 focus:border-teal-700 focus:outline-none peer"
              // placeholder='Password'
              name="password"
              onChange={onChange}
              value={password}
              required
            />
            <label
              htmlFor="password"
              className={`absolute left-0 cursor-text ${
                password || focusedInput === "password"
                  ? "text-teal-700 text-xs -top-3"
                  : "-top-0 text-sm"
              } transition-all duration-300`}
            >
              Password
            </label>
          </div>

          <button className="rounded py-1 bg-[#E97576] hover:bg-[#F6CAC7] transition-colors text-white hover:text-black">
            Login
          </button>
          <div className="border-b w-full"></div>
          <p className="self-center">
            <Link
              href="./forgot_password"
              className="border-b-2 border-[#EFBE6D]"
            >
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
