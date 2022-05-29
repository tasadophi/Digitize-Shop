import Link from "next/link";
import { useState } from "react";
import { useShop } from "../context/state";
import { searchOnProducts } from "../lib/api";
import SearchIcon from "./icons/SearchIcon";
import Image from "next/image";
const Header = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const shop = useShop();
  const allProducts = shop.allProducts;
  // handler
  const searchHandler = (e) => {
    setSearch(e.target.value);
    const searched = searchOnProducts(allProducts, e.target.value);
    setSearchedProducts(searched);
  };

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
        <div className="w-full max-w-xl relative flex flex-col">
          <div className="w-full max-w-xl max-h-12 flex items-center bg-stone-50 py-3 px-4 rounded">
            <span className="w-7 h-full bg-inherit text-slate-800">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={searchHandler}
              className="w-full outline-none bg-inherit mr-2 placeholder:text-gray-300"
              placeholder="جستجوی نام محصول، نام برند،  نام مدل ..."
            />
          </div>
          <div
            className={`w-full max-h-64 shadow overflow-auto no-scrollbar bg-white rounded-bl rounded-br absolute z-20 pt-4 top-full ${
              searchedProducts.length ? "block" : "hidden"
            }`}
          >
            {searchedProducts[0] !== "false" ? (
              searchedProducts.map((product) => {
                return (
                  <Link
                    href={`/products/${product.category}/${product.id}`}
                    key={product.id}
                    passHref
                  >
                    <div className="w-full flex cursor-pointer hover:bg-gray-50 transition-all p-4 items-center justify-between bg-white border-b whitespace-nowrap text-ellipsis overflow-hidden border-gray-300">
                      <div className="relative w-16 h-16">
                        <Image
                          src={product.image}
                          alt={product.model}
                          layout="fill"
                        />
                      </div>
                      <span>{product.model}</span>
                      <span></span>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="w-full flex justify-center bg-white px-2 py-1 border-b border-gray-300">
                محصولی نیست!
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
