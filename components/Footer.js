import Image from "next/image";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden lg:flex bg-white py-6 px-10 container justify-between">
      <div className="flex flex-col w-8/12 gap-6">
        <div>
          <span className="text-orange-600 text-2xl font-bold">
            دیجی&#8239;
          </span>
          <span className="text-slate-800 text-2xl font-bold">تایز</span>
        </div>
        <div className="flex font-medium gap-8">
          <span className="w-3/4">
            دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی
            هوشمند و ساعت هوشمند می‌باشد. <br /> دیجی تایز افتخار این را داشته
            که به
            <span className="text-orange-600"> ۱۲۲,۲۳۲ نفر</span> تا به اکنون
            خدمت رسانی داشته باشد.
          </span>
          <div className="flex flex-col items-center w-1/4 gap-4">
            <span className="font-medium text-2xl">محصولات</span>
            <div className="flex flex-col gap-2">
              <span className="hover:text-orange-600">
                <Link href="/products/mobiles">تلفن همراه</Link>
              </span>
              <span className="hover:text-orange-600">
                <Link href="/products/laptops">لپتاپ</Link>
              </span>
              <span className="hover:text-orange-600">
                <Link href="/products/watches">ساعت هوشمند</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-36 h-36">
          <Image
            src="/images/map.png"
            alt="map"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-evenly">
            <span>021-123456</span>
            <span className="w-6 h-6 text-orange-600">
              <PhoneIcon />
            </span>
          </div>
          <span className="flex justify-evenly">info@digitize.ir</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
