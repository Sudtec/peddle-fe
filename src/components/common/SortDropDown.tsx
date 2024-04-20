"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, JSX, SVGProps, useEffect, useRef, useState } from "react";
import Image from "next/image";

function Icon({ order }: { order: string }) {
  const OrderDir: { [key: string]: JSX.Element } = {
    asc: (
      <Image src={"/img/arrow-down.png"} alt="Desc" height={20} width={20} />
    ),
    desc: <Image src={"/img/arrow-up.png"} alt="asc" height={20} width={20} />,
  };

  const CurrentOrder = OrderDir[order] ?? (
    <Image src={"/img/sort.png"} alt="Sort" width={20} height={20} />
  );
  return CurrentOrder;
}

export default function SortDropdown({
  currentSort,
  currentOrder,
  setCurrentSort,
  setCurrentOrder,
}: {
  currentSort: string;
  currentOrder: string;
  setCurrentSort: React.Dispatch<React.SetStateAction<string>>;
  setCurrentOrder: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center gap-x-4  px-6 py-[14px] text-sm font-medium border rounded-[100px]">
            <label className="text-base ">
              {currentSort
                ? currentSort === "BrandName"
                  ? "Brand Name"
                  : "Product Name"
                : "Sort"}
            </label>
            <Icon order={currentOrder} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 md:-right-16 xsm:left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-primary-dark`}
                    onClick={() => {
                      setCurrentSort("productName");
                      setCurrentOrder((prev) => {
                        if (prev == "") {
                          return "asc";
                        } else if (prev == "asc") {
                          return "desc";
                        } else {
                          setCurrentSort("");
                          return "";
                        }
                      });
                    }}
                  >
                    Product Name
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-primary-dark`}
                    onClick={() => {
                      setCurrentSort("brand");
                      setCurrentOrder((prev) => {
                        if (prev == "") {
                          return "asc";
                        } else if (prev == "asc") {
                          return "desc";
                        } else {
                          setCurrentSort("");
                          return "";
                        }
                      });
                    }}
                  >
                    Brand Name
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
