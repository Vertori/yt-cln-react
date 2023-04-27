import React from "react";
import { Link } from "react-router-dom";
import ytLogo from "../assets/yt-icon.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full h-[90px] bg-[#000] flex justify-between items-center sticky top-0 py-4 px-6">
      <Link to="/">
        <img className="h-[45px]" src={ytLogo} alt="YouTube Logo" />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
