const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    comment_fill: {
      required: true,
      type: [],
    },
    timestamp: {
      require: true,
      type: Date,
    },
    product_id: {
      require: true,
      type: Number,
    },
  },
  { versionKey: false }
);

commentSchema.set("timestamps", true);
commentSchema.set();
module.exports = mongoose.model("Comment", commentSchema);
