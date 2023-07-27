const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    price: {
      require: true,
      type: Number,
    },
    stock: {
      require: true,
      type: Number,
    },
  },
  { versionKey: false }
);

productSchema.set("timestamps", true);
productSchema.set();
module.exports = mongoose.model("Product", productSchema);
