const Video = require("../models/video");

// post
const createVideo = async (data) => {
  try {
    const newVideo = new Video(data);
    const saveVideo = await newVideo.save();
    return saveVideo;
  } catch (error) {
    throw new Error("repo : Failed to create video");
  }
};

// get all video
const getAllVideo = async () => {
  try {
    const videos = Video.find();
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

const updateVideo = async (id, data) => {
  try {
    const newData = { new: true };
    const updateData = await Video.findByIdAndUpdate(id, data, newData);
    return updateData;
  } catch (error) {
    throw new Error("repo : Failed to update video by id");
  }
};

const deleteVideo = async (id) => {
  try {
    return await Video.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("repo : Failed to update video by id");
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
};
