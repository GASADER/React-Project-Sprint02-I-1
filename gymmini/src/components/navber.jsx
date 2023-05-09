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
        <ul className="nav-link">
          <li className="text-red-500">
            <Link href="/">Login</Link>
          </li>
          <p>or</p>
          <li className="text-red-500">
            <Link href="/">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
