import productData from "@/data/products.json";

const getAllProducts = () => productData.products;

const getProductById = (productId) => {
  return productData.products.find((product) => product.id == productId);
};

const getProductCategories = () => {
  const categories = new Set();
  productData.products.forEach((product) => categories.add(product.category));
  return Array.from(categories);
};

const getProductsByCategory = (category) => {
  if (category.toLowerCase() === "all") {
    return getProducts();
  } else {
    return productData.products.filter(
      (product) => product.category === category
    );
  }
};

const getProducts = () => {
  const categories = getProductCategories();
  const productsByCategories = [];

  const productsToAddPerCategory = Math.ceil(12 / categories.length);

  for (const category of categories) {
    const productsInCategory = getProductsByCategory(category).slice(
      0,
      productsToAddPerCategory
    );
    productsByCategories.push(...productsInCategory);
  }

  return productsByCategories.slice(0, 12);
};

export {
  getAllProducts,
  getProductById,
  getProductCategories,
  getProducts,
  getProductsByCategory,
};
