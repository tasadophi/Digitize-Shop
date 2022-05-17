import MobileHeader from "../components/MobileHeader";
import Image from "next/image";
import XIcon from "../components/icons/XIcon";
import BottomMenu from "../components/BottomMenu";
import { useShop } from "../context/state";
import { sepratePrice } from "../lib/api";
import Layout from "../Layout/Layout";

const CartItem = ({ product }) => {
  return (
    <div className="w-full flex gap-2 bg-white rounded-xl">
      <div className="relative w-14 h-24 mr-4">
        <Image
          src={product.image}
          alt="iphone"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col justify-evenly overflow-hidden text-sm sm:text-lg">
        <span className="text-ellipsis whitespace-nowrap overflow-hidden">
          {product.model}
        </span>
        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-medium text-orange-600">
          {sepratePrice(product.price)} تومان
        </span>
      </div>
      <div className="flex flex-col justify-self-end items-end  mr-auto justify-between p-2">
        <span className="w-3 h-3 text-orange-400">
          <XIcon />
        </span>
        <div className="flex items-center gap-1">
          <span className="w-5 h-5 bg-gray-200 text-gray-600 flex justify-center items-center rounded-full">
            +
          </span>
          <span className="border border-orange-600 px-1 rounded p-0.5">1</span>
          <span className="w-5 h-5 bg-orange-200 text-orange-600 flex justify-center items-center rounded-full">
            -
          </span>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const shop = useShop();
  const total = shop.cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <Layout>
      <section className="container p-6">
        <MobileHeader logo={false} title="سبد خرید" />
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col justify-center gap-2 lg:w-3/5 lg:justify-start">
            {shop.cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className="bg-white flex flex-col gap-7 w-full h-fit p-2 mt-8 mb-12 rounded-xl lg:w-2/5 lg:m-0">
            <div className="flex justify-between p-4">
              <span className="font-medium text-xl text-slate-800">
                مجموع قیمت:
              </span>
              <span className="font-medium text-orange-600">
                {sepratePrice(total)} تومان
              </span>
            </div>
            <span className="p-4">کد تخفیف دارید؟</span>
            <div className="bg-orange-600 text-2xl rounded-xl py-4 flex justify-center text-white lg:m-0">
              ادامه فرایند خرید
            </div>
          </div>
        </div>
        <BottomMenu />
      </section>
    </Layout>
  );
};

export default Cart;
