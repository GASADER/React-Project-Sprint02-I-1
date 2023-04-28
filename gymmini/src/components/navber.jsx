import React from "react";
export default function Navber() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="/">
          <img src="/" alt="logo" id="logoimg" />
        </a>
      </div>
      <div className="nav-account-container">
        <p className="pr-2">Have an account?</p>
        <ul className="nav-link">
          <li className="text-red-500">
            <a href="/">Login</a>
          </li>
          <p>or</p>
          <li className="text-red-500">
            <a href="/">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
