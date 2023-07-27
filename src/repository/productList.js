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

const updateProduct = async (id, data) => {
  try {
    const newData = { new: true };
    const updateData = await Product.findByIdAndUpdate(id, data, newData);
    return updateData;
  } catch (error) {
    throw new Error("Failed to update product by id");
  }
};

const deleteProduct = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to update product by id");
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
