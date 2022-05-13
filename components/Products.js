import Product from "./Product";
import Filters from "./Filters";
import Head from "next/head";
import { useProducts } from "../context/state";
import { getProductsByCategory } from "../lib/api";
import Categories from "./Categories";
import SortIcon from "./icons/SortIcon";
import FilterIcon from "./icons/FilterIcon";
import { useState } from "react";
import BottomMenu from "./BottomMenu";
import MobileHeader from "./MobileHeader";

const titles = {
  mobiles: "تلفن همراه",
  laptops: "لپتاپ",
  watches: "ساعت هوشمند",
};

const Products = ({ category }) => {
  const [showFilters, setShowFilters] = useState(false);
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
          <MobileHeader logo={true} title={titles[category] || "همه محصولات"} />
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
          </div>
        </div>
        <div className="col-span-1 max-h-[600px] overflow-auto rounded-xl bg-white">
          <div className="hidden px-6 pt-6 lg:block">
            <Categories />
          </div>
          {/* <Filters /> */}
          <div
            className={`fixed inset-0 bg-stone-100 pr-6 bg-opacity-80 lg:static lg:w-fit lg:h-fit lg:bg-white lg:-z-10 ${
              showFilters ? "z-20 w-screen h-screen" : "-z-10"
            }`}
            onClick={() => setShowFilters(false)}
          >
            <div
              className={`bg-white fixed transition-all w-full h-2/3 overflow-auto p-4 z-20 right-0 lg:overflow-visible lg:p-0 lg:static ${
                showFilters ? "bottom-0" : "-bottom-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <Filters setShowFilters={setShowFilters} />
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-8 lg:col-span-4 mb-16">
          <div className="hidden bg-white w-full p-1 gap-2 items-center rounded-md lg:flex">
            <span className="w-9 h-9 text-orange-600 bg-orange-100 p-1 rounded">
              <SortIcon />
            </span>
            <div className="flex gap-4">
              <span className="text-slate-800 cursor-pointer">محبوب ترین</span>
              <span className="text-gray-400 cursor-pointer">پربازدیدترین</span>
              <span className="text-gray-400 cursor-pointer">گران ترین</span>
              <span className="text-gray-400 cursor-pointer">ارزان ترین</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:px-0">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <BottomMenu />
      </main>
    </>
  );
};

export default Products;
