import Image from "next/image";
import Link from "next/link";
import { sepratePrice } from "../lib/api";

const getColors = (colorCode) => {
  const styles = {
    backgroundColor: colorCode,
  };
  return (
    <span
      key={colorCode}
      style={styles}
      className="w-6 h-6 rounded-full -mr-2 flex justify-center items-center"
    >
      <span className="border border-white w-4 h-4 rounded-full block"></span>
    </span>
  );
};

const Product = ({ product }) => {
  return (
    <>
      <div className="bg-white p-2 rounded-xl flex flex-col gap-4">
        <div className="bg-stone-200 rounded-lg flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.model}
            width={140}
            height={165}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">{product.brandFa}</span>
          <div className="flex">
            {product.colors.map((color) => getColors(color.hex))}
          </div>
        </div>
        <div className="flex flex-col text-sm gap-2 pb-2 border-b border-orange-200">
          <span>{product.model}</span>
          <span className="self-end text-orange-600 font-bold">
            {sepratePrice(product.price)} تومان
          </span>
        </div>
        <button className="text-orange-600 font-bold">
          <Link href={`/products/${product.category}/${product.id}`}>
            مشاهده و سفارش
          </Link>
        </button>
      </div>
    </>
  );
};

export default Product;
