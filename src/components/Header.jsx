import React from "react";
import Logo from "../assets/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full h-[4.5rem] flex justify-center items-center border-b shadow-sm">
      <div className="w-[80%] h-full flex justify-between items-center">
        <div className="h-10">
          <img className="h-full" src={Logo} alt="" />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
