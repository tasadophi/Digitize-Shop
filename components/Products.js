import Product from "./Product";
import Filters from "./Filters";
import Head from "next/head";
import { useProducts } from "../context/state";
import { getProductsByCategory } from "../lib/api";
import Categories from "./Categories";
import SearchIcon from "./icons/SearchIcon";
import SortIcon from "./icons/SortIcon";
import FilterIcon from "./icons/FilterIcon";
import Image from "next/image";

const titles = {
  mobiles: "گوشی های موبایل",
  laptops: "لپتاپ ها",
  watches: "ساعت هوشمند",
};

const Products = ({ category }) => {
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
            <div className="bg-white flex p-3 gap-3 rounded w-full">
              <span className="w-6 h-6 text-gray-300">
                <FilterIcon />
              </span>
              <span>فیلتر</span>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 p-6 bg-white rounded-xl max-h-[650px] lg:block">
          <Categories />
          <Filters />
        </div>
        <div className="col-span-5 flex flex-col gap-8 lg:col-span-4">
          <div className="hidden bg-white w-full h-6 rounded-md lg:block"></div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:px-0">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
