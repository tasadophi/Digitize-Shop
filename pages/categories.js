import MobileHeader from "../components/MobileHeader";
import BottomMenu from "../components/BottomMenu";
import Image from "next/image";

const CategoryTitle = ({ title, src }) => {
  return (
    <div className="bg-gray-200 rounded-xl h-56 flex flex-col items-center justify-between">
      <span className="pt-4">{title}</span>
      <div className="relative w-40 h-40 rounded-xl">
        <Image
          className="rounded-xl"
          src={src}
          alt="mobiles"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

const CategoryChild = ({ title, src }) => {
  return (
    <div className="h-40 bg-white rounded-xl flex flex-col justify-between items-center px-8 py-5">
      <div className="relative w-16 h-16">
        <Image src={src} alt="apple" layout="fill" objectFit="contain" />
      </div>
      <span>{title}</span>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="p-6">
      <MobileHeader logo={true} title="دسته بندی" />
      <div className="flex flex-col gap-6 text-slate-800 mb-16">
        <div className="flex items-end gap-2">
          <CategoryTitle title="تلفن همراه" src="/images/mobiles.png" />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild title="اپل" src="/images/apple.png" />
              <CategoryChild title="شیائومی" src="/images/xiaomi.png" />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <CategoryTitle title="لپتاپ" src="/images/laptops.png" />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild title="ایسوس" src="/images/asus.png" />
              <CategoryChild title="لنوو" src="/images/lenovo.png" />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <CategoryTitle title="ساعت هوشمند" src="/images/watches.png" />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild title="شیائومی" src="/images/xiaomi.png" />
              <CategoryChild title="اپل" src="/images/apple.png" />
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </section>
  );
};

export default Categories;
