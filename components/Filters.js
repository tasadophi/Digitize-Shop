import BrandIcon from "./icons/BrandIcon";
import ChevronIcon from "./icons/ChevronIcon";
import ColorIcon from "./icons/ColorIcon";
import PriceIcon from "./icons/PriceIcon";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { useShop } from "../context/state";
import { useRouter } from "next/router";
import { sepratePrice } from "../lib/api";
import React from "react";
import { useEffect } from "react";

const getBrands = (products, category) => {
  const allBrands = [];
  products.forEach((product) => {
    if (category) {
      if (product.category === category) allBrands.push(product.brand);
    } else return allBrands.push(product.brand);
  });
  return allBrands.filter((brand, index, arrey) => {
    return (
      index === arrey.findIndex((value) => value.brandEn === brand.brandEn)
    );
  });
};

const getColors = (products, category) => {
  const allColors = [];
  products.forEach((product) => {
    if (category) {
      if (product.category === category) {
        product.colors.forEach((color) => allColors.push(color));
      }
    } else product.colors.forEach((color) => allColors.push(color));
  });
  return allColors.filter((color, index, arrey) => {
    return index === arrey.findIndex((value) => value.nameEn === color.nameEn);
  });
};

const getMinMaxPrice = (products, category) => {
  const allPrices = [];
  products.forEach((product) => {
    if (category) {
      if (product.category === category) allPrices.push(product.price);
    } else allPrices.push(product.price);
  });
  return {
    min: Math.min(...allPrices),
    max: Math.max(...allPrices),
  };
};

const Filters = ({ setShowFilters, category }) => {
  const [showMenu, setShowMenu] = useState({
    brand: false,
    color: false,
    price: false,
  });
  const shop = useShop();
  const minMaxPrices = getMinMaxPrice(shop.allProducts, category);
  const brands = getBrands(shop.allProducts, category);
  const colors = getColors(shop.allProducts, category);
  const router = useRouter();
  const [priceRange, setPriceRange] = useState(minMaxPrices.min);

  useEffect(() => {
    if (router.query["price"]) setPriceRange(parseInt(router.query["price"]));
    else setPriceRange(minMaxPrices.min);
  }, [router.query]);

  // handlers
  const showHideMenu = (property) => {
    setShowMenu({ ...showMenu, [property]: !showMenu[property] });
  };

  const filterByPrice = (e) => {
    setPriceRange(e.target.value);
    if (parseInt(e.target.value) > minMaxPrices.min) {
      router.query["price"] = e.target.value;
    } else delete router.query["price"];
    router.pathname === "/"
      ? router.push(router, { query: router.query }, { shallow: true })
      : router.replace(router, {}, { shallow: true });
  };

  const hideFilters = () => setShowFilters(false);

  const removeFilters = () => {
    for (let query in router.query)
      if (query !== "category") delete router.query[query];
    router.pathname === "/"
      ? router.push(router, { query: router.query }, { shallow: true })
      : router.replace(router, {}, { shallow: true });
    hideFilters();
  };

  return (
    <>
      <span className="text-orange-600 font-bold text-xl block my-6">
        فیلتر
      </span>
      <ul className="flex flex-col gap-4 select-none">
        <li>
          <div
            className="flex items-center gap-8 cursor-pointer"
            onClick={() => showHideMenu("brand")}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6">
                <BrandIcon />
              </span>
              برند محصول
            </div>
            <span
              className={`w-6 h-6 ${showMenu["brand"] ? "rotate-180" : ""}`}
            >
              <ChevronIcon />
            </span>
          </div>
          <ul
            className={`pt-4 flex-col gap-3 ${
              showMenu["brand"] ? "flex" : "hidden"
            }`}
          >
            <li className="pr-2">
              {brands.map((brand) => (
                <CheckBox
                  key={brand.brandEn}
                  label={brand.brandFa}
                  id={brand.brandEn}
                  category={category}
                  checked={router.query["brand" + brand.brandEn] ? true : false}
                  type="brand"
                />
              ))}
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex items-center gap-8 cursor-pointer"
            onClick={() => showHideMenu("color")}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6">
                <ColorIcon />
              </span>
              رنگ محصول
            </div>
            <span
              className={`w-6 h-6 ${showMenu["color"] ? "rotate-180" : ""}`}
            >
              <ChevronIcon />
            </span>
          </div>
          <ul
            className={`pt-4 flex-col gap-3 ${
              showMenu["color"] ? "flex" : "hidden"
            }`}
          >
            <li className="pr-2">
              {colors.map((color) => (
                <CheckBox
                  key={color.nameEn}
                  label={color.nameFa}
                  id={color.nameEn}
                  category={category}
                  checked={router.query["colors" + color.nameEn] ? true : false}
                  type="colors"
                />
              ))}
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex items-center gap-8 cursor-pointer"
            onClick={() => showHideMenu("price")}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6">
                <PriceIcon />
              </span>
              محدوده قیمت
            </div>
            <span
              className={`w-6 h-6 ${showMenu["price"] ? "rotate-180" : ""}`}
            >
              <ChevronIcon />
            </span>
          </div>
          <ul
            className={`pt-4 flex-col w-full gap-3 ${
              showMenu["price"] ? "flex" : "hidden"
            }`}
          >
            <li className="flex flex-col pl-4 pr-2">
              <input
                className="appearance-none rotate-180 cursor-pointer h-2 rounded-lg p-0 bg-orange-100 focus:outline-none focus:ring-0 focus:shadow-nones"
                min={minMaxPrices.min}
                max={minMaxPrices.max}
                value={priceRange}
                onChange={filterByPrice}
                type="range"
              />
              <div className="flex justify-between gap-1 p-2">
                <p className="text-xs">{sepratePrice(minMaxPrices.max)}</p>
                <p className="text-xs border border-orange-600 rounded p-1 text-orange-600 bg-orange-100">
                  {sepratePrice(priceRange)}
                </p>
                <p className="text-xs">{sepratePrice(minMaxPrices.min)}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex lg:hidden gap-4 mt-8">
        <button
          className="bg-orange-600 rounded cursor-pointer w-full text-white py-2 px-4"
          onClick={hideFilters}
        >
          تایید
        </button>
        <button
          className="text-orange-600 rounded cursor-pointer w-full border border-orange-600 py-2 px-4"
          onClick={removeFilters}
        >
          لغو فیلتر
        </button>
      </div>
    </>
  );
};

export default React.memo(Filters);
