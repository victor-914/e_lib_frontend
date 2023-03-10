import React, { useState } from "react";
import bg from "../../assets/3d.webp";
import Image from "next/image";
import logo from "../../assets/unnlogo.png";
import Login from "./Login";
import CreateAcount from "./CreateAcount";

function LoginHomePage() {
  const [state, setState] = useState("login");

  return (
    <div className="w-full p-4">
      <main className="loginHomeContainer hidden">
        <Image src={bg} layout="fill" />
        <div className="cover"></div>
      </main>
      <section className="login flex-col w-full">
        <div className="logoContainer  pt-6  items-center justify-center flex flex-col w-full">
          <div>
            <Image src={logo} alt="UNN_logo" width="70px" height="70px" />
          </div>
          <header className=" text-xl font-semibold font-sans">
            DEPARTMENT OF HUMAN ANATOMY
          </header>
        </div>
        <header className="w-full font-bold text-center text-gray-700">
          {state === "login"
            ? "Login into your account"
            : state === "create"
            ? "Create Account"
            : res
            ? res
            : null}
        </header>
        {state === "login" ? (
          <Login setState={setState} />
        ) : state === "create" ? (
          <CreateAcount setState={setState} />
        ) : null}
      </section>
    </div>
  );
}

export default LoginHomePage;
