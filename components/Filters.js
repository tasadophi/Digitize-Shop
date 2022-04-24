import BrandIcon from "./icons/BrandIcon";
import ChevronIcon from "./icons/ChevronIcon";
import ColorIcon from "./icons/ColorIcon";
import PriceIcon from "./icons/PriceIcon";
import CheckBox from "./CheckBox";

const Filters = () => {
  return (
    <ul className="flex flex-col gap-4 select-none">
      <li>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex gap-2">
            <span className="w-6 h-6">
              <BrandIcon />
            </span>
            برند محصول
          </div>
          <span>
            <ChevronIcon />
          </span>
        </div>
        <ul className="pt-4 flex flex-col gap-3">
          <li>
            <CheckBox label="اپل" id="apple" />
          </li>
          <li>
            <CheckBox label="سامسونگ" id="samsung" />
          </li>
          <li>
            <CheckBox label="شیائومی" id="xiaomi" />
          </li>
          <li>
            <CheckBox label="هواوی" id="huawei" />
          </li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex gap-2">
            <span className="w-6 h-6">
              <ColorIcon />
            </span>
            رنگ محصول
          </div>
          <span className="w-6 h-6">
            <ChevronIcon />
          </span>
        </div>
        <ul></ul>
      </li>
      <li>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex gap-2">
            <span className="w-6 h-6">
              <PriceIcon />
            </span>
            محدوده قیمت
          </div>
          <span className="w-6 h-6">
            <ChevronIcon />
          </span>
        </div>
        <ul></ul>
      </li>
    </ul>
  );
};

export default Filters;
