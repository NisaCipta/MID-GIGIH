const productRepo = require("../repository/productList");

const createProduct = async (dataProduct) => {
  try {
    const newProduct = await productRepo.createProduct(dataProduct);
    return newProduct;
  } catch (error) {
    throw new Error("service : Failed to create product");
  }
};

const getAllProduct = async () => {
  try {
    return await productRepo.getAllProduct();
  } catch (error) {
    throw new Error("service : Failed to get all product");
  }
};

const getProductById = async (id) => {
  try {
    return await productRepo.getProductById(id);
  } catch (error) {
    throw new Error("service : Failed to get product by id");
  }
};

const updateProduct = async (id, data) => {
  try {
    return await productRepo.updateProduct(id, data);
  } catch (error) {
    throw new Error("service : Failed to update product by id");
  }
};

const deleteProduct = async (id) => {
  try {
    return await productRepo.deleteProduct(id);
  } catch (error) {
    throw new Error("service : Failed to delete product by id");
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
