import React from "react";
import Link from "next/link";

export default function Navber() {
  return (
    <nav className="nav">
      <div className="logo-container py-4 ">
        <Link href="/">
          <img src="/" alt="logo" id="logoimg" />
        </Link>
      </div>
      <div className="nav-account-container">
        <p className="pr-2">Have an account?</p>
        <Link className="text-red-500" href="/login">
          Login
        </Link>
        <p> or </p>
        <Link className="text-red-500" href="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}
