import Products from "../../../components/Products";
import Layout from "../../../Layout/Layout";
import { getCategoryPaths } from "../../../lib/api";

const Category = ({ category }) => {
  return (
    <Layout>
      <Products category={category} />
    </Layout>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  return {
    props: { category: params.category },
  };
}

export async function getStaticPaths() {
  const paths = getCategoryPaths();
  return {
    paths,
    fallback: false,
  };
}
