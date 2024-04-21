import { format } from "date-fns";
import Link from "next/link";
import { Boosted, Avatar, Edit } from "@icons";
import Image from "next/image";

const Item = ({ data }: { data: any }) => {
  return (
    <>
      <div className="shadow-md border-[#E2E4F2] p-3 lg:p-2 rounded-[16px] flex flex-col gap-3">
        <Link href={`/product/${data?.id}`} className="relative">
          <Image
            src={"/img/product.png"}
            alt="product"
            width={220}
            height={153}
            className="w-full rounded-[10px] h-[153px] md:h-[120px] object-cover object-center cursor-pointer"
          />
          <div className="absolute px-2 h-5 top-[10px] right-[10px] gap-2 bg-[#3949AB] rounded-md border-0 flex items-center">
            <Boosted />
            <span className="text-xs text-white">In-Stock</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#B8B8B8]">
            {format(new Date(data?.createdAt), "MMM do | h:mm aa")}
          </span>
          <div className="flex flex-col mb-[9px]">
            <Link
              href={`/product/${data?.id}`}
              className="text-sm text-typography-400"
            >
              {data?.brand || "Brand Name"}
            </Link>
            <h5 className="text-base lg:text-sm font-bold text-primary-500 font-outfit-bold">
              {data?.productName || "Product Name"}
            </h5>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="rounded ">
                <Avatar className="w-[25px] h-[25px]" />
              </div>
              <span className="regularCaption text-[#3949AB] ">
                {"Sodiq Azeez"}
              </span>
            </div>
            <Link
              href={`product/${data.id}`}
              className="flex items-center gap-x-1 underline underline-offset-4 decoration-primary-dark"
            >
              <Edit />
              <span className="text-sm ">Edit</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
