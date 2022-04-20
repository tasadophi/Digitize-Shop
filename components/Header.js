import Image from "next/image";
import Link from "next/link";
import Filter from "../public/images/icons/Filter";
import Search from "../public/images/icons/Search";
import Sort from "../public/images/icons/Sort";

const Header = () => {
  return (
    <header className="lg:container">
      {/* mobile haader */}
      <div className="flex flex-col lg:hidden">
        {/* main title */}
        <div className="flex justify-between items-center p-6">
          <Image
            src="/images/Logo.png"
            alt="digitize logo"
            width={50}
            height={42}
          />
          <span className="text-slate-800 font-bold">ساعت هوشمند</span>
          <span className="w-8 h-8 p-1 bg-white shadow flex justify-center items-center rounded">
            <Search />
          </span>
        </div>
        {/* filter section */}
        <div className="flex items-center justify-between p-6 gap-2 text-sm text-slate-800">
          <div className="bg-white flex p-3 gap-3 items-center rounded w-full">
            <span className="text-orange-600">
              <Sort />
            </span>
            <span>محبوب ترین</span>
          </div>
          <div className="bg-white flex p-3 gap-3 rounded w-full">
            <span className="text-gray-300">
              <Filter />
            </span>
            <span>فیلتر: اپل</span>
          </div>
        </div>
      </div>
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
            <Link href="/pages/products/mobiles">تلفن همراه</Link>
          </span>
          <span className="hover:text-orange-600">
            <Link href="/pages/products/mobiles">لپتاپ</Link>
          </span>
          <span className="hover:text-orange-600">
            <Link href="/pages/products/mobiles">ساعت هوشمند</Link>
          </span>
        </div>
        <div className="w-full max-w-xl max-h-12 flex items-center bg-stone-50 py-3 px-4 rounded">
          <span className="w-7 h-full bg-inherit text-slate-800">
            <Search />
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
