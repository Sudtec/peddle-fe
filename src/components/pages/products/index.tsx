"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import { useQuery } from "@tanstack/react-query";
import { Add } from "@icons";
import SortDropdown from "@/components/common/SortDropDown";
import Item from "@/components/common/ProductItem";

const Product = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [currentOrder, setCurrentOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log(process.env.API_URL, "here");

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["productData"],
    queryFn: () =>
      fetch(
        `http://localhost:4000/products?order_by=${
          !currentOrder ? "desc" : currentOrder
        }&sort_by=${
          !currentSort ? "createdAt" : currentSort
        }&filter=${searchTerm}`
        // {
        //   mode: "cors",
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // }
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (currentOrder || currentSort || searchTerm) {
      refetch();
    }
  }, [currentSort, currentOrder, refetch, searchTerm]);

  console.log(data);
  console.log(data?.data?.product);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <main>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="border border-[#e6e7eb] max-w-full h-[85vh] px-6 py-8 m-5 rounded-md overflow-y-scroll">
        <div className="flex justify-between px-6 pb-8">
          <h4 className="text-[24px] font-semibold">Product</h4>
          {/* <div className="flex items-center gap-x-8"> */}
          <SortDropdown
            currentSort={currentSort}
            currentOrder={currentOrder}
            setCurrentSort={setCurrentSort}
            setCurrentOrder={setCurrentOrder}
          />

          {/* </div> */}
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-8 px-4">
          {data?.data?.product.map((item: any, index: number) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
