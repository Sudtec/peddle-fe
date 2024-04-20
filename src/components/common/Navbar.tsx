import React from "react";
import Image from "next/image";
import { SearchIcon } from "../svg";

const Navbar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <nav className="sticky  top-0 left-0 right-0  h-[80px] w-full flex items-end bg-white z-50">
      <div className=" h-[64px] w-full rounded-[100px] shadow-md max-w-full flex justify-between items-center px-6  mx-4">
        <div>
          <Image
            src={"/img/peddle.png"}
            alt="Logo"
            width={100}
            height={70}
            className="object-contain "
          />
        </div>
        <div className=" w-[500px] h-[50px] bg-[#eff0f8] flex items-center rounded-[100px]">
          <SearchIcon className="w-5 h-5 z-50 " />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search Product Name or Brand Name"
            className="bg-[#eff0f8] outline-none rounded-[100px] w-full h-[50px]  pl-8 -ml-6
            "
          />
          <button className="main-btn-primary">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
