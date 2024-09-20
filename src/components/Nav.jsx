import React from "react";
import UserBtn from "./UserBtn";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center gap-20">
      <ul className="flex justify-center items-center gap-4">
        <li>Catlalog</li>
        <li>How it works</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Services</li>
        <li>Use-cases</li>
        <li>Need help?</li>
      </ul>
      <UserBtn/>
    </nav>
  );
};

export default Nav;
