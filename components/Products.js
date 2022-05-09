import Product from "./Product";
import Filters from "./Filters";
import Head from "next/head";
import { useProducts } from "../context/state";
import { getProductsByCategory } from "../lib/api";
import Categories from "./Categories";
import SearchIcon from "./icons/SearchIcon";
import SortIcon from "./icons/SortIcon";
import FilterIcon from "./icons/FilterIcon";
import HomeIcon from "./icons/HomeIcon";
import CategoryIcon from "./icons/CategoryIcon";
import CartIcon from "./icons/CartIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const titles = {
  mobiles: "گوشی های موبایل",
  laptops: "لپتاپ ها",
  watches: "ساعت هوشمند",
};

const Products = ({ category }) => {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();
  const productsData = useProducts();
  const products = category
    ? getProductsByCategory(productsData.allProducts, category)
    : productsData.allProducts;
  return (
    <>
      <Head>
        <title>{titles[category]}</title>
      </Head>
      <main className="lg:container p-6 grid grid-cols-5 gap-4">
        <div className="flex flex-col col-span-5 lg:hidden">
          <div className="flex justify-between items-center py-6">
            <Image
              src="/images/Logo.png"
              alt="digitize logo"
              width={50}
              height={42}
            />
            <span className="text-slate-800 font-bold">ساعت هوشمند</span>
            <span className="w-8 h-8 p-1 bg-white shadow flex justify-center items-center rounded">
              <SearchIcon />
            </span>
          </div>
          <div className="flex items-center justify-between py-6 gap-2 text-sm text-slate-800">
            <div className="bg-white flex p-3 gap-3 items-center rounded w-full">
              <span className="w-6 h-6 text-orange-600">
                <SortIcon />
              </span>
              <span>محبوب ترین</span>
            </div>
            <div
              className="bg-white flex p-3 gap-3 rounded w-full"
              onClick={() => setShowFilters(true)}
            >
              <span className="w-6 h-6 text-gray-300">
                <FilterIcon />
              </span>
              <span>فیلتر</span>
            </div>
            {/* filter section modal */}
            <div
              className={`fixed inset-0  w-screen h-screen bg-stone-100 bg-opacity-80 ${
                showFilters ? "z-10" : "-z-10"
              }`}
              onClick={() => setShowFilters(false)}
            >
              <div
                className={`fixed transition-all w-full h-2/3 overflow-auto z-20 bg-white right-0 p-4 ${
                  showFilters ? "bottom-0" : "-bottom-full"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Filters mobile={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 p-6 bg-white rounded-xl max-h-[650px] lg:block">
          <Categories />
          <Filters />
        </div>
        <div className="col-span-5 flex flex-col gap-8 lg:col-span-4 mb-16">
          <div className="hidden bg-white w-full h-6 rounded-md lg:block"></div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:px-0">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="fixed flex justify-between gap-2 bottom-0 left-0 bg-white w-full py-4 px-10 shadow-current shadow-2xl lg:hidden">
          <Link href="/" passHref>
            <div
              className={`flex items-center gap-4 ${
                router.pathname === "/" ? "" : "opacity-40"
              }`}
            >
              <span className="w-8 h-8 text-slate-800">
                <HomeIcon />
              </span>
              <span
                className={`font-medium ${
                  router.pathname === "/" ? "" : "hidden"
                }`}
              >
                خانه
              </span>
            </div>
          </Link>
          <Link href="/categories" passHref>
            <div
              className={`flex items-center gap-4 ${
                router.pathname === "/categories" ? "" : "opacity-40"
              }`}
            >
              <span className="w-8 h-8 text-slate-800">
                <CategoryIcon />
              </span>
              <span
                className={`font-medium ${
                  router.pathname === "/categories" ? "" : "hidden"
                }`}
              >
                دسته بندی
              </span>
            </div>
          </Link>
          <Link href="/cart" passHref>
            <div
              className={`flex items-center gap-4 ${
                router.pathname === "/cart" ? "" : "opacity-40"
              }`}
            >
              <span className="w-8 h-8 text-slate-800">
                <CartIcon />
              </span>
              <span
                className={`font-medium ${
                  router.pathname === "/cart" ? "" : "hidden"
                }`}
              >
                سبد خرید
              </span>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Products;
