import Link from "next/link";
import MobileIcon from "./icons/MobileIcon";
import LaptopIcon from "./icons/LaptopIcon";
import WatchIcon from "./icons/WatchIcon";
const Categories = () => {
  return (
    <>
      <span className="text-orange-600 font-bold text-xl block mb-5">
        دسته بندی
      </span>
      <div className="flex flex-col gap-4">
        <span className="flex gap-2 cursor-pointer w-fit hover:text-orange-600">
          <span className="w-6 h-6">
            <MobileIcon />
          </span>
          <Link href="/products/mobiles">تلفن همراه</Link>
        </span>
        <span className="flex gap-2 cursor-pointer w-fit hover:text-orange-600">
          <span className="w-6 h-6">
            <LaptopIcon />
          </span>
          <Link href="/products/laptops">لپتاپ</Link>
        </span>
        <span className="flex gap-2 cursor-pointer w-fit hover:text-orange-600">
          <span className="w-6 h-6">
            <WatchIcon />
          </span>
          <Link href="/products/watches">ساعت هوشمند</Link>
        </span>
      </div>
    </>
  );
};

export default Categories;
