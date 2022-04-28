import Image from "next/image";
import Link from "next/link";
import FilterIcon from "./icons/FilterIcon";
import SearchIcon from "./icons/SearchIcon";
import SortIcon from "./icons/SortIcon";
const Header = () => {
  return (
    <header className="lg:container">
      {/* desktop header */}
      <div className="hidden p-7 bg-white max-h-32 gap-14 items-center lg:flex">
        <div className="flex gap-6">
          <div>
            <span className="text-orange-600 text-2xl font-bold">
              دیجی&#8239;
            </span>
            <span className="text-slate-800 text-2xl font-bold">تایز</span>
          </div>
          <span className="text-slate-800 text-2xl font-bold hover:text-orange-600">
            <Link href="/">خانه</Link>
          </span>
        </div>
        <div className="text-slate-800 flex gap-14 text-2xl whitespace-nowrap">
          <span className="hover:text-orange-600">
            <Link href="/products/mobiles">تلفن همراه</Link>
          </span>
          <span className="hover:text-orange-600">
            <Link href="/products/laptops">لپتاپ</Link>
          </span>
          <span className="hover:text-orange-600">
            <Link href="/products/watches">ساعت هوشمند</Link>
          </span>
        </div>
        <div className="w-full max-w-xl max-h-12 flex items-center bg-stone-50 py-3 px-4 rounded">
          <span className="w-7 h-full bg-inherit text-slate-800">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="w-full outline-none bg-inherit mr-2 placeholder:text-gray-300"
            placeholder="جستجوی نام محصول، نام برند،  نام مدل ..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
