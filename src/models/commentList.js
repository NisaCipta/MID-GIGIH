const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    comment: {
      required: true,
      type: String,
    },
    video_id: {
      require: true,
      type: String,
    },
  },
  { versionKey: false }
);

commentSchema.set("timestamps", true);
commentSchema.set();
module.exports = mongoose.model("Comment", commentSchema);
