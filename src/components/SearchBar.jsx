import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form
      className="w-full max-w-md flex flex-row items-center ml-8"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full h-11 bg-[#f5f5f5] outline-none border-none rounded-3xl pt-0 pr-14 pb-0 pl-6 text-base"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button className="w-14 h-11 -ml-10 bg-none border-none outline-none cursor-pointer transition hover:text-red-600">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
