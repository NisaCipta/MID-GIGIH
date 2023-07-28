const service = require("../services");
const pkg = require("../../src/pkg");

const createVideo = async (req, res) => {
  try {
    let { url_image_thumbnail, video_url } = req.body;

    if (video_url == "") {
      throw new pkg.CustomError("video_url is required", 400);
    }

    if (url_image_thumbnail == "") {
      throw new pkg.CustomError("url_image_tumbnail is required", 400);
    }
    
    console.log(req.body, 123);
    let newVideo = await service.videoService.createVideo(req.body);
    console.log(newVideo, 123);

    pkg.Responder.generateResponse(res, 201, "success create video", newVideo);
  } catch (error) {
    pkg.Responder.responseError(res, error);
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

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
};
