"use client";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Label from "@/components/common/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/common/Navbar";
import Loading from "@/app/loading";

function EditProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    brand: "",
    productName: "",
    upc12: "",
  });

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["productsDetails"],
    queryFn: () =>
      fetch(`${process.env.API_URL}products/${params.productId}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (data) {
      setFormData({
        brand: data?.data.product.brand,
        productName: data?.data.product.productName,
        upc12: data?.data.product.upc12,
      });
      setTimeout(() => {
        setLoading(false);
      },2000);
    }
  }, [data]);

  const {
    isFetching: updatePending,
    error: updateError,
    data: updateData,
    refetch: updateRefetch,
  } = useQuery({
    queryKey: ["updateProduct"],
    queryFn: () =>
      fetch(`${process.env.API_URL}products/${params.productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json()),
    enabled: false, // disable this query from automatically running
  });

  const updateProduct = () => {
    updateRefetch();
  };

  if (isPending || loading) return <Loading />;

  return (
    <main className="">
      <Navbar back={true} />
      <div className="flex gap-8 p-12 w-8/12 md:w-full mx-auto">
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
            <Input
              type="text"
              placeholder="Brand"
              className="w-full"
              value={formData.brand}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => ({
                  ...prev,
                  brand: e.target.value,
                }));
              }}
              error={formData.brand ? "" : "Brand Name is Required"}
            />
          </div>

          {/* product name */}
          <div className="space-y-2">
            <Label label="Product Name" />
            <Input
              type="text"
              placeholder="Product Name"
              className="w-full"
              value={formData.productName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => ({
                  ...prev,
                  productName: e.target.value,
                }));
              }}
              error={formData.productName ? "" : "Product Name is Required"}
            />
          </div>

          {/* barcode */}
          <div className="space-y-2">
            <Label label="Barcode" />
            <Input
              type="text"
              placeholder="Barcode"
              className="w-full"
              value={formData.upc12}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => ({
                  ...prev,
                  upc12: e.target.value,
                }));
              }}
              error={formData.upc12 ? "" : "Barcode is Required"}
            />
          </div>

          {/* submit */}
          <div className="flex justify-end">
            {/* <button className="main-btn-primary">Update Product</button> */}
            <Button
              className="main-btn-primary"
              onClick={() => updateProduct()}
              loading={updatePending}
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
