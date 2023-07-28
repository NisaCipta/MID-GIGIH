const videoModel = require("../models");

// post
const createVideo = async (data) => {
  try {
    console.log(data, 8888);
    const saveVideo = await videoModel.save(data);
    console.log(data, saveVideo, 99999);

    return saveVideo;
  } catch (error) {
    throw new Error("repo : Failed to create video");
  }
};

// get all video
const getAllVideo = async () => {
  try {
    const videos = video.find();
    return videos;
  } catch (error) {
    throw new Error("repo : Failed to get all video");
  }
};

// get by id
const getVideoById = async (id) => {
  try {
    return await Video.findById(id);
  } catch (error) {
    throw new Error("repo : Failed to get video by id");
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
};
