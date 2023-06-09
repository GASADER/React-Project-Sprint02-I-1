import React, { useState, useEffect } from "react";
import Link from "next/link";
import img from "../../public/user.png";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from '../../public/gymmini-low-resolution-logo-color-on-transparent-background.svg'


export default function Navber() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");
  const [userImage, setUserimage] = useState("");
  const router = useRouter();
  
  function logout() {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
    router.push(`/`);
    window.location.reload();
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUserImage = localStorage.getItem("userImage");
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
    if (storedUsername && storedUsername !== "undefined") {
      setUsername(storedUsername);
    } else {
      setUsername("User");
    }
    if (storedUserImage && storedUserImage !== "undefined") {
      setUserimage(storedUserImage);
    } else {
      setUserimage(img);
    }
  }, []);
  return (
    <nav className="nav px-8">
      <div className="logo-container py-4 ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="nav-account-container gap-4">
          <div className="w-full h-auto items-end justify-center flex flex-col">
            <p>Welcome {userName}</p>
            <a className="text-red-500 cursor-pointer text-sm" onClick={logout}>
              Logout&nbsp;?
            </a>
          </div>
          <Link
            className="w-8 h-auto border-yellow-500 border rounded-full aspect-square"
            href="/profile"
          >
              <Image
                className="w-full h-full rounded-full"
                src={userImage}
                alt="User Image"
                width={8}
                height={8}
              />
          </Link>
        </div>
      ) : (
        <div className="nav-account-container">
          <p className="pr-2">Have an account?</p>
          <Link className="text-red-500 cursor-pointer" href="/login">
            Login
          </Link>
          <p>&nbsp; or &nbsp;</p>
          <Link className="text-red-500" href="/register">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
