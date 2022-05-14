import MobileHeader from "../components/MobileHeader";
import Image from "next/image";
import XIcon from "../components/icons/XIcon";
import BottomMenu from "../components/BottomMenu";

const CartItem = () => {
  return (
    <div className="w-full flex gap-2 bg-white rounded-xl">
      <div className="relative w-14 h-24 mr-4">
        <Image
          src="/images/iphone4.png"
          alt="iphone"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col justify-evenly overflow-hidden text-sm sm:text-lg">
        <span className="text-ellipsis whitespace-nowrap overflow-hidden">
          گوشی آیفون 13 پرومکس
        </span>
        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-medium text-orange-600">
          44.444.444 تومان
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
  return (
    <section className="container p-6">
      <MobileHeader logo={false} title="سبد خرید" />
      <div className="flex flex-col justify-center gap-2">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="bg-white flex flex-col gap-7 w-full p-7 mt-8 rounded-xl">
        <div className="flex justify-between">
          <span className="font-medium text-xl text-slate-800">
            مجموع قیمت:
          </span>
          <span className="font-medium text-orange-600">10.254.545 تومان</span>
        </div>
        <span>کد تخفیف دارید؟</span>
      </div>
      <div className="bg-orange-600 mb-12 mt-32 text-2xl rounded-xl py-4 flex justify-center text-white">ادامه فرایند خرید</div>
      <BottomMenu />
    </section>
  );
};

export default Cart;
