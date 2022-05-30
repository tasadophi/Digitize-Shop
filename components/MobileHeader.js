import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import ChevronIcon from "./icons/ChevronIcon";
import XIcon from "./icons/XIcon";
import React from "react";
import { useState } from "react";
import { useShop } from "./../context/state";
import { searchOnProducts } from "./../lib/api";
import Link from "next/link";

const MobileHeader = ({ logo, title }) => {
  const [onSearch, setOnSearch] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const shop = useShop();
  const allProducts = shop.allProducts;

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const searched = searchOnProducts(allProducts, e.target.value);
    setSearchedProducts(searched);
  };

  return (
    <div className="flex justify-between items-center py-6 lg:hidden">
      {logo ? (
        <div className={onSearch ? "hidden" : ""}>
          <Image
            src="/images/Logo.png"
            alt="digitize logo"
            width={50}
            height={42}
          />
        </div>
      ) : (
        <span className="w-8 h-8 bg-white shadow-md rounded-xl p-1 flex justify-center items-center -rotate-90">
          <ChevronIcon />
        </span>
      )}
      <span className="text-slate-800 font-bold">{title}</span>
      <div className="flex flex-col rounded shadow relative">
        <div className="flex rounded shadow">
          <span
            className={`w-8 h-8 p-1 bg-white shadow flex justify-center items-center ${
              onSearch ? "rounded-r " : "rounded"
            } ${searchedProducts.length ? "rounded-br-none" : "rounded-br"}`}
            onClick={() => setOnSearch(!onSearch)}
          >
            {onSearch ? <XIcon /> : <SearchIcon />}
          </span>
          <input
            type="text"
            className={`w-full border-none outline-none rounded-bl rounded-tl ${
              onSearch ? "block" : "hidden"
            } ${searchedProducts.length ? "rounded-bl-none" : "rounded-bl"}`}
            value={search}
            onChange={searchHandler}
          />
        </div>
        <div
          className={`flex-col bg-white absolute top-full w-full max-h-40 shadow no-scrollbar overflow-auto ${
            searchedProducts.length && onSearch
              ? "flex rounded-bl rounded-br"
              : "hidden"
          }`}
        >
          {searchedProducts[0] !== "false" ? (
            searchedProducts.map((product) => {
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.category}/${product.id}`}
                  passHref
                >
                  <div className="w-full bg-white p-2 min-h-[3rem] border-b whitespace-nowrap text-ellipsis overflow-x-hidden border-gray-300">
                    {product.model}
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="w-full bg-white px-2 py-1 border-b border-gray-300">
              محصولی نیست!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileHeader);
