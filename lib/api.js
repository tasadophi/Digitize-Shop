export const getCategoryPaths = () => {
  const jsonData = require("./../data.json");
  const paths = jsonData.map((data) => {
    return {
      params: {
        category: data.category,
      },
    };
  });
  return paths;
};

export const getProductsByCategory = (allProducts, category) => {
  return allProducts.filter((product) => product.category === category);
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
