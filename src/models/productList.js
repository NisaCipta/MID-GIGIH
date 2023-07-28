const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    price: {
      require: true,
      type: Number,
    },
    video_id: {
      required: true,
      type: String,
    },
    link_product: {
      require: true,
      type: String,
    },
  },
  { versionKey: false }
);

productSchema.set("timestamps", true);
productSchema.set();
module.exports = mongoose.model("Product", productSchema);
