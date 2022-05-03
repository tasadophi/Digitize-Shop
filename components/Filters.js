import BrandIcon from "./icons/BrandIcon";
import ChevronIcon from "./icons/ChevronIcon";
import ColorIcon from "./icons/ColorIcon";
import PriceIcon from "./icons/PriceIcon";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { useProducts } from "../context/state";

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

const Filters = () => {
  const [showMenu, setShowMenu] = useState({
    brand: false,
    color: false,
    price: false,
  });
  const products = useProducts();
  const brands = getBrands(products.allProducts);
  const colors = getColors(products.allProducts);

  // handler
  const showHideMenu = (property) => {
    setShowMenu({ ...showMenu, [property]: !showMenu[property] });
  };

  return (
    <>
      <span className="text-orange-600 font-bold text-xl block my-6">
        فیلتر
      </span>
      <ul className="flex flex-col gap-4 select-none">
        <li>
          <div className="flex items-center gap-8 cursor-pointer">
            <div
              className="flex items-center gap-2"
              onClick={() => showHideMenu("brand")}
            >
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
            {brands.map((brand) => (
              <CheckBox
                key={brand.brandEn}
                label={brand.brandFa}
                id={brand.brandEn}
              />
            ))}
          </ul>
        </li>
        <li>
          <div className="flex items-center gap-8 cursor-pointer">
            <div
              className="flex items-center gap-2"
              onClick={() => showHideMenu("color")}
            >
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
            {colors.map((color) => (
              <CheckBox
                key={color.nameEn}
                label={color.nameFa}
                id={color.nameEn}
              />
            ))}
          </ul>
        </li>
        <li>
          <div className="flex items-center gap-8 cursor-pointer">
            <div
              className="flex items-center gap-2"
              onClick={() => showHideMenu("price")}
            >
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
            className={`pt-4 flex-col gap-3 ${
              showMenu["price"] ? "flex" : "hidden"
            }`}
          >
            <li>
              <input defaultValue="10" type="range" />
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Filters;
