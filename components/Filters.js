import Brand from "../public/images/icons/Brand";
import Chevron from "../public/images/icons/Chevron";
import Color from "../public/images/icons/Color";
import Price from "../public/images/icons/Price";
import CheckBox from "./CheckBox";

const Filters = () => {
  return (
    <ul className="flex flex-col gap-4 select-none">
      <li>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex gap-2">
            <Brand />
            برند محصول
          </div>
          <span>
            <Chevron />
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
            <Color />
            رنگ محصول
          </div>
          <span>
            <Chevron />
          </span>
        </div>
        <ul></ul>
      </li>
      <li>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex gap-2">
            <Price />
            محدوده قیمت
          </div>
          <span>
            <Chevron />
          </span>
        </div>
        <ul></ul>
      </li>
    </ul>
  );
};

export default Filters;
