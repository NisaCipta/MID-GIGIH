const Repo = require("../repository");

const createVideo = async (dataVideo) => {
  try {
    const video = dataVideo;
    console.log(video, 876);
    return await Repo.videoRepo.createVideo(video);
  } catch (error) {
    console.log(error, 1111111)
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

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
};
