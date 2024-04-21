import React from "react";
import Image from "next/image";
import { SearchIcon } from "../svg";
import Link from "next/link";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  back,
}: {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  back?: boolean;
}) => {
  return (
    <nav className="sticky  top-0 left-0 right-0  h-[80px] w-full flex items-end bg-white z-50">
      <div className=" h-[64px]  w-full rounded-[100px] shadow-md max-w-full flex justify-between items-center px-6  mx-4">
        <div>
          <Image
            src={"/img/peddle.png"}
            alt="Logo"
            width={100}
            height={70}
            className="object-contain "
          />
        </div>
        {!back ? (
          <div className=" w-[500px] md:w-[350px] h-[50px] bg-[#eff0f8] flex items-center rounded-[100px]">
            <SearchIcon className="w-5 h-5 z-50 " />
            <input
              type="text"
              onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search Product Name or Brand Name"
              className="bg-[#eff0f8] text-sm outline-none rounded-[100px] w-full h-[50px]  pl-8 -ml-6"
            />
            <button className="main-btn-primary md:py-3 md:px-8">Search</button>
          </div>
        ) : (
          <Link
            href={"/"}
            className="main-btn-primary-outline flex items-center gap-x-1"
          >
            <Image
              src={"/img/arrow-left.png"}
              width={25}
              height={20}
              alt="Back"
            />
            <span className="text-sm text-primary-dark">Back</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
