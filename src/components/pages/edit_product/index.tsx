"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Label from "@/components/common/label";
import Image from "next/image";
import React from "react";

function EditProduct() {
  return (
    <main className="p-12 w-8/12 md:w-full mx-auto">
      <div className="flex gap-8">
        <div className="relative">
          <Image
            src={"/img/product.png"}
            alt="product"
            width={220}
            height={153}
            className="w-full rounded-[10px] h-[153px] md:h-[120px] object-cover object-center cursor-pointer"
          />
        </div>

        <div className="space-y-5 flex-1">
          {/* brand */}
          <div className="space-y-2">
            <Label label="Brand" />

            <Input type="text" placeholder="Brand" className="w-full" />
          </div>

          {/* product name */}
          <div className="space-y-2">
            <Label label="Product Name" />

            <Input type="text" placeholder="Product Name" className="w-full" />
          </div>

          {/* barcode */}
          <div className="space-y-2">
            <Label label="Barcode" />

            <Input type="text" placeholder="Barcode" className="w-full" />
          </div>

          {/* submit */}
          <div className="flex justify-end">
            {/* <button className="main-btn-primary">Update Product</button> */}
            <Button
              className="main-btn-primary"
              onClick={() => console.log("clicked")}
              loading
            >
              Update Product
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProduct;
