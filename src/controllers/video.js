const videoService = require("../services/video");

const generateResponse = (code, message, data) => {
  return {
    code: code,
    message: message,
    data: data,
  };
};

const createVideo = async (req, res) => {
  try {
    const videoData = req.body;
    const newVideo = await videoService.createVideo(videoData);
    res.status(201).json(generateResponse(201, "success create video", newVideo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVideo = async (req, res) => {
  try {
    const dataVideos = await videoService.getAllVideo();
    res.status(200).json(generateResponse(200, "success get all video", dataVideos));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataVideo = await videoService.getVideoById(id);
    res.status(200).json(generateResponse(200, "success get video by id", dataVideo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updateVideo = await videoService.updateVideo(id, newData);
    res.status(200).json(generateResponse(200, "success update video by id", updateVideo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteVideo = await videoService.deleteVideo(id);
    res.status(200).json(generateResponse(200, "success delete video by id", deleteVideo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
};
