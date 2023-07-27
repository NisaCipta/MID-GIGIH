const mongoose = require("mongoose");
const { Schema } = mongoose;

const thumbnailSchema = new Schema(
  {
    video_id: {
      required: true,
      type: String,
    },
    url_image_thumbnail: {
      required: true,
      type: String,
    },
  },
  { versionKey: false }
);

thumbnailSchema.set("timestamps", true);
thumbnailSchema.set();
module.exports = mongoose.model("Thumbnail", thumbnailSchema);
