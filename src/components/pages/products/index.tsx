"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import { useQuery } from "@tanstack/react-query";
import { Add } from "@icons";
import SortDropdown from "@/components/common/SortDropDown";
import Item from "@/components/common/ProductItem";
import Loading from "@/app/loading";

const Product = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [currentOrder, setCurrentOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `${process.env.API_URL}products?order_by=${
          !currentOrder ? "desc" : currentOrder
        }&sort_by=${
          !currentSort ? "createdAt" : currentSort
        }&filter=${searchTerm}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (currentOrder || currentSort || searchTerm) {
      refetch();
    }
  }, [currentSort, currentOrder, refetch, searchTerm]);



  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <main>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="border border-[#e6e7eb] max-w-full h-[85vh] px-6 py-8 m-5 rounded-md overflow-y-scroll">
        <div className="flex justify-between px-6 pb-8">
          <h4 className="text-[24px] font-semibold">Product</h4>
          <SortDropdown
            currentSort={currentSort}
            currentOrder={currentOrder}
            setCurrentSort={setCurrentSort}
            setCurrentOrder={setCurrentOrder}
          />
        </div>
        <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 px-4">
          {data?.data?.product.map((item: any, index: number) => (
            <Item data={item} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
