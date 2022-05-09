import HomeIcon from "./icons/HomeIcon";
import CategoryIcon from "./icons/CategoryIcon";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomMenu = () => {
  const router = useRouter();
  return (
    <div className="fixed flex justify-between gap-2 bottom-0 left-0 bg-white w-full py-4 px-10 shadow-current shadow-2xl lg:hidden">
      <Link href="/" passHref>
        <div
          className={`flex items-center gap-4 ${
            router.pathname === "/" ? "" : "opacity-40"
          }`}
        >
          <span className="w-8 h-8 text-slate-800">
            <HomeIcon />
          </span>
          <span
            className={`font-medium ${router.pathname === "/" ? "" : "hidden"}`}
          >
            خانه
          </span>
        </div>
      </Link>
      <Link href="/categories" passHref>
        <div
          className={`flex items-center gap-4 ${
            router.pathname === "/categories" ? "" : "opacity-40"
          }`}
        >
          <span className="w-8 h-8 text-slate-800">
            <CategoryIcon />
          </span>
          <span
            className={`font-medium ${
              router.pathname === "/categories" ? "" : "hidden"
            }`}
          >
            دسته بندی
          </span>
        </div>
      </Link>
      <Link href="/cart" passHref>
        <div
          className={`flex items-center gap-4 ${
            router.pathname === "/cart" ? "" : "opacity-40"
          }`}
        >
          <span className="w-8 h-8 text-slate-800">
            <CartIcon />
          </span>
          <span
            className={`font-medium ${
              router.pathname === "/cart" ? "" : "hidden"
            }`}
          >
            سبد خرید
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BottomMenu;
