import BrandIcon from "./icons/BrandIcon";
import ChevronIcon from "./icons/ChevronIcon";
import ColorIcon from "./icons/ColorIcon";
import PriceIcon from "./icons/PriceIcon";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { useProducts } from "../context/state";
import { sepratePrice } from "../lib/api";

const getBrands = (products) => {
  const allBrands = products.map((product) => product.brand);
  return allBrands.filter((brand, index, arrey) => {
    return (
      index === arrey.findIndex((value) => value.brandEn === brand.brandEn)
    );
  });
};

const getColors = (products) => {
  const allColors = [];
  products.forEach((product) => {
    product.colors.forEach((color) => allColors.push(color));
  });
  return allColors.filter((color, index, arrey) => {
    return index === arrey.findIndex((value) => value.nameEn === color.nameEn);
  });
};

const getMinMaxPrice = (products) => {
  const allPrices = products.map((product) => {
    return product.price;
  });
  return {
    min: Math.min(...allPrices),
    max: Math.max(...allPrices),
  };
};

const Filters = ({ setShowFilters }) => {
  const [showMenu, setShowMenu] = useState({
    brand: false,
    color: false,
    price: false,
  });
  const products = useProducts();
  const minMaxPrices = getMinMaxPrice(products.allProducts);
  const brands = getBrands(products.allProducts);
  const colors = getColors(products.allProducts);
  const [priceRange, setPriceRange] = useState(minMaxPrices.min);

  // handler
  const showHideMenu = (property) => {
    setShowMenu({ ...showMenu, [property]: !showMenu[property] });
  };

  const hideFilters = () => setShowFilters(false);

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
                onChange={(e) => setPriceRange(e.target.value)}
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
          onClick={hideFilters}
        >
          لغو فیلتر
        </button>
      </div>
    </>
  );
};

export default Filters;
