import Head from "next/head";
import Products from "../components/Products";
import Layout from "../Layout/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
      </Head>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}
