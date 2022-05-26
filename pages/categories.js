import MobileHeader from "../components/MobileHeader";
import BottomMenu from "../components/BottomMenu";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const CategoryTitle = ({ title, src, category }) => {
  return (
    <Link href={`/products/${category}`} passHref>
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
    </Link>
  );
};

const CategoryChild = ({ title, src, category, query }) => {
  return (
    <Link
      href={{
        query: { [query]: true },
        pathname: `/products/${category}`,
      }}
      passHref
    >
      <div className="h-40 bg-white rounded-xl flex flex-col justify-between items-center px-8 py-5">
        <div className="relative w-16 h-16">
          <Image src={src} alt="apple" layout="fill" objectFit="contain" />
        </div>
        <span>{title}</span>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <section className="p-6 lg:hidden">
      <Head>
        <title>دسته بندی</title>
      </Head>
      <MobileHeader logo={true} title="دسته بندی" />
      <div className="flex flex-col gap-6 text-slate-800 mb-16">
        <div className="flex items-end gap-2">
          <CategoryTitle
            title="تلفن همراه"
            src="/images/mobiles.png"
            category="mobiles"
          />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild
                title="اپل"
                src="/images/apple.png"
                category="mobiles"
                query="brandapple"
              />
              <CategoryChild
                title="شیائومی"
                src="/images/xiaomi.png"
                category="mobiles"
                query="brandxiaomi"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <CategoryTitle
            title="لپتاپ"
            src="/images/laptops.png"
            category="laptops"
          />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild
                title="ایسوس"
                src="/images/asus.png"
                category="laptops"
                query="brandasus"
              />
              <CategoryChild
                title="لنوو"
                src="/images/lenovo.png"
                category="laptops"
                query="brandlenovo"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <CategoryTitle
            title="ساعت هوشمند"
            src="/images/watches.png"
            category="watches"
          />
          <div className="flex flex-col justify-between h-56 overflow-hidden">
            <span className="self-end text-orange-600">مشاهده همه</span>
            <div className="flex gap-2 overflow-auto">
              <CategoryChild
                title="اپل"
                src="/images/apple.png"
                category="watches"
                query="brandapple"
              />
              <CategoryChild
                title="شیائومی"
                src="/images/xiaomi.png"
                category="watches"
                query="brandxiaomi"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </section>
  );
};

export default Categories;
