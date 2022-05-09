import Head from "next/head";
import { useProducts } from "../../../context/state";
import {
  getProductById,
  getProductsPaths,
  sepratePrice,
} from "../../../lib/api";
import SearchIcon from "../../../components/icons/SearchIcon";
import ChevronIcon from "../../../components/icons/ChevronIcon";
import CheckIcon from "../../../components/icons/CheckIcon";
import ShopIcon from "../../../components/icons/ShopIcon";
import TruckIcon from "../../../components/icons/TruckIcon";
import { useState } from "react";
import Image from "next/image";
import GuranteeIcon from "../../../components/icons/GuranteeIcon";
import Categories from "../../../components/Categories";
import Layout from "./../../../Layout/Layout";

const GetColors = ({ colorCode, selectedColor, setSelectedColor }) => {
  const styles = {
    backgroundColor: colorCode,
  };
  return (
    <span
      style={styles}
      onClick={() => setSelectedColor(colorCode)}
      className="w-8 h-8 rounded-full cursor-pointer ring-offset-2 -mr-2 flex justify-center items-center"
    >
      <span
        className={`${
          colorCode === selectedColor ? "border border-white" : ""
        } w-6 h-6 text-white flex justify-center items-center rounded-full`}
      >
        {colorCode === selectedColor ? <CheckIcon /> : ""}
      </span>
    </span>
  );
};

const ShopDetail = ({ icon, mainText, secondText }) => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6">{icon}</span>
        <span>{mainText}:</span>
      </div>
      <span>{secondText}</span>
    </div>
  );
};

const ProductDetail = ({ name, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
        <span>{name}:</span>
      </div>
      <span className="mr-2 font-medium">{value}</span>
    </div>
  );
};

const Product = ({ category, id }) => {
  const productsData = useProducts();
  const product = getProductById(productsData.allProducts, category, id);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex);

  return (
    <>
      <Head>
        <title>{product.model}</title>
      </Head>
      <Layout>
        <div className="lg:container grid grid-cols-5 p-6 gap-4">
          <div className="hidden col-span-1 p-6 bg-white rounded-xl h-fit max-h-[650px] lg:block">
            <Categories />
          </div>
          <div className="col-span-5 flex flex-col gap-8 lg:col-span-4">
            <div className="hidden bg-white w-full h-6 rounded-md lg:block">
              sadasd
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-4 my-12 items-center text-slate-800 lg:hidden">
                <span className="w-8 h-8 bg-white shadow-md rounded-xl p-1 flex justify-center items-center -rotate-90">
                  <ChevronIcon />
                </span>
                <span className="font-medium text-lg">{product.model}</span>
                <span className="w-8 h-8 bg-white shadow-md rounded p-1 flex justify-center items-center">
                  <SearchIcon />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-10 mb-11 rounded lg:flex-row lg:items-start lg:justify-start lg:bg-white lg:px-4 lg:py-8">
                <div className="w-56 relative h-56">
                  <Image
                    src={product.image}
                    alt={product.model}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col flex-auto w-full gap-4 lg:items-start lg:w-fit">
                  <div className="flex flex-col gap-1 items-center">
                    <span className="text-2xl font-medium">
                      {product.model}
                    </span>
                    <span className="text-lg text-gray-400">
                      {product.modelEn}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-14">
                    <span>انتخاب رنگ:</span>
                    <div className="flex">
                      {product.colors.map((color) => (
                        <GetColors
                          key={color.hex}
                          colorCode={color.hex}
                          selectedColor={selectedColor}
                          setSelectedColor={setSelectedColor}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4 mb-7 lg:hidden">
                    <div className="flex flex-wrap justify-center gap-4">
                      <ShopDetail
                        icon={<ShopIcon />}
                        mainText="فروشنده"
                        secondText="دیجی تایز"
                      />
                      <ShopDetail
                        icon={<GuranteeIcon />}
                        mainText="ضمانت"
                        secondText="18 ماه زرین"
                      />
                    </div>
                    <ShopDetail
                      icon={<TruckIcon />}
                      mainText="ارسال توسط"
                      secondText="انبار تهران"
                    />
                  </div>
                  <div className="px-4 lg:px-0">
                    <div className="bg-white rounded flex flex-col gap-2 px-4 py-5 mb-24 lg:mb-0 lg:p-0">
                      <span className="text-xl font-medium">
                        ویژگی های کالا:
                      </span>
                      {product.specifications.map((specification) => (
                        <ProductDetail
                          key={specification.nameFa}
                          name={specification.nameFa}
                          value={specification.value}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden flex-auto bg-gray-100 p-2 rounded lg:block">
                  <div className="flex flex-col gap-4 mb-7">
                    <ShopDetail
                      icon={<ShopIcon />}
                      mainText="فروشنده"
                      secondText="دیجی تایز"
                    />
                    <ShopDetail
                      icon={<GuranteeIcon />}
                      mainText="ضمانت"
                      secondText="18 ماه زرین"
                    />
                    <ShopDetail
                      icon={<TruckIcon />}
                      mainText="ارسال توسط"
                      secondText="انبار تهران"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis self-end text-orange-600 text-xl font-medium">
                      {sepratePrice(product.price)} تومان
                    </span>
                    <button className="bg-orange-400 cursor-pointer text-white px-8 rounded py-3">
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
              <div className="fixed flex p-4 justify-between items-center w-full rounded bg-white bottom-0 left-0 lg:hidden">
                <button className="bg-orange-400 cursor-pointer text-white px-8 rounded py-3">
                  افزودن به سبد خرید
                </button>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {sepratePrice(product.price)} تومان
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const paths = getProductsPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { category: params.category, id: params.id },
  };
}