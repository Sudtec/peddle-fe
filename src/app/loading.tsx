import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center bg-white flex-col space-y-6">
      <div className="relative w-full h-10">
        <Image
          src="/img/peddle.png"
          alt="Logo"
          fill
          className="object-contain "
        />
      </div>

      <div className="custom-loader"></div>
    </section>
  );
};

export default Loading;
