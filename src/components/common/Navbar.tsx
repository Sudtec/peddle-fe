import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky  top-0 left-0 right-0  h-[80px] w-full flex items-end bg-white z-50">
      <div className=" h-[64px] w-full rounded-[100px] shadow-md max-w-full flex justify-between items-center pl-6 pr-3 mx-4">
        <div>
          <Image
            src={"/img/peddle.png"}
            alt="Logo"
            width={100}
            height={70}
            className="object-contain "
          />
        </div>
        <div>SearchBar</div>
      </div>
    </nav>
  );
};

export default Navbar;
