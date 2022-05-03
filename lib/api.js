const jsonData = require("./../data.json");
export const getCategoryPaths = () => {
  const categories = [...new Set(jsonData.map((data) => data.category))];
  const paths = categories.map((category) => {
    return {
      params: {
        category,
      },
    };
  });
  return paths;
};

export const getProductsPaths = () => {
  const paths = jsonData.map((product) => {
    return {
      params: {
        category: product.category,
        id: String(product.id),
      },
    };
  });
  return paths;
};

export const getProductsByCategory = (allProducts, category) => {
  return allProducts.filter((product) => product.category === category);
};

export const getProductById = (allProducts, category, id) => {
  return allProducts.find(
    (product) => product.category === category && product.id === parseInt(id)
  );
};

export const sepratePrice = (number) => {
  number += "";
  number = number.replace(",", "");
  let x = number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "٫" + "$2");
  return y + z;
};
