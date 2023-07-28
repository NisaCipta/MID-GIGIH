const { productModel } = require("../models");

// post
const createProduct = async (data) => {
  try {
    const saveProduct = await productModel.create(data);
    return saveProduct;
  } catch (error) {
    throw new Error("Failed to create product");
  }
};

// get all product
const getAllProduct = async () => {
  try {
    const products = productModel.find();
    return products;
  } catch (error) {
    throw new Error("Failed to get all product");
  }
};

// get by id
const getProductById = async (id) => {
  try {
    return await productModel.findById(id);
  } catch (error) {
    throw new Error("Failed to get product by id");
  }
};

const getProductByVideoID = async (id) => {
  try {
    return await productModel.findById({ video_id: id });
  } catch (error) {
    throw new Error("Failed to get product by video id");
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  getProductByVideoID,
};
