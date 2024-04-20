"use client";
import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { Add } from "@icons";
import SortDropdown from "@/components/common/SortDropDown";
import Item from "@/components/common/ProductItem";

const Product = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [currentOrder, setCurrentOrder] = useState<string>("");

  return (
    <main>
      <Navbar />
      <div className="border border-[#e6e7eb] max-w-full h-[85vh] px-6 py-8 m-5 rounded-md overflow-y-scroll">
        <div className="flex justify-between px-6 pb-8">
          <h4 className="text-[24px] font-semibold">Product</h4>
          <div className="flex items-center gap-x-8">
            <SortDropdown
              currentSort={currentSort}
              currentOrder={currentOrder}
              setCurrentSort={setCurrentSort}
              setCurrentOrder={setCurrentOrder}
            />
            <button
              className="main-btn-primary-outline capitalize flex items-center gap-x-3"
              // onClick={toggleNeedModal}
            >
              <Add className="w-5 h-5 " />
              Create Product
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-8 px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14].map((item, index) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
