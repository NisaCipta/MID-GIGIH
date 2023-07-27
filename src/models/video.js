const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema(
  {
    video_url: {
      required: true,
      type: String,
    },
  },
  { versionKey: false }
);

videoSchema.set("timestamps", true);
videoSchema.set();
module.exports = mongoose.model("Video", videoSchema);
