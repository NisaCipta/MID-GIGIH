const videoRepo = require("../repository/video");

const createVideo = async (dataVideo) => {
  try {
    const newVideo = await videoRepo.createVideo(dataVideo);
    return newVideo;
  } catch (error) {
    throw new Error("service : Failed to create video");
  }
};

const getAllVideo = async () => {
  try {
    return await videoRepo.getAllVideo();
  } catch (error) {
    throw new Error("service : Failed to get all video");
  }
};

const getVideoById = async (id) => {
  try {
    return await videoRepo.getVideoById(id);
  } catch (error) {
    throw new Error("service : Failed to get video by id");
  }
};

const updateVideo = async (id, data) => {
  try {
    return await videoRepo.updateVideo(id, data);
  } catch (error) {
    throw new Error("service : Failed to update video by id");
  }
};

const deleteVideo = async (id) => {
  try {
    return await videoRepo.deleteVideo(id);
  } catch (error) {
    throw new Error("service : Failed to delete video by id");
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
};
