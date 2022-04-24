import MobileIcon from "./icons/MobileIcon";
import LaptopIcon from "./icons/LaptopIcon";
import WatchIcon from "./icons/WatchIcon";
import Product from "./Product";
import Filters from "./Filters";
import Link from "next/link";
import Head from "next/head";
import { useProducts } from "../context/state";
import { getProductsByCategory } from "../lib/api";

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
      <main className="lg:container p-6 grid grid-cols-5 gap-4 lg:px-0">
        <div className="hidden col-span-1 p-6 bg-white rounded-xl max-h-[650px] lg:block">
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
          <span className="text-orange-600 font-bold text-xl block my-6">
            فیلتر
          </span>
          <Filters />
        </div>
        {/* products */}
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
