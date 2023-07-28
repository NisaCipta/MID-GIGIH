const Product = require("../models/productList");

// post
const createProduct = async (data) => {
  try {
    const newProduct = new Product(data);
    const saveProduct = await newProduct.save();
    return saveProduct;
  } catch (error) {
    throw new Error("Failed to create product");
  }
};

// get all product
const getAllProduct = async () => {
  try {
    const products = Product.find();
    return products;
  } catch (error) {
    throw new Error("Failed to get all product");
  }
};

// get by id
const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new Error("Failed to get product by id");
  }
};


module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
};
