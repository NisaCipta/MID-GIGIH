const productService = require("../services/productList");

const generateResponse = (code, message, data) => {
  return {
    code: code,
    message: message,
    data: data,
  };
};

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(generateResponse(201, "success create product", newProduct));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const dataProducts = await productService.getAllProduct();
    res.status(200).json(generateResponse(200, "success get all product", dataProducts));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataProduct = await productService.getProductById(id);
    res.status(200).json(generateResponse(200, "success get all product", dataProduct));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
};
