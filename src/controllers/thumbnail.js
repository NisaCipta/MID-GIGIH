const thumbnailService = require("../services/thumbnail");
const { responseError, generateResponse } = require("../pkg/reponder");
const customError = require("../pkg/error");

const validateCreatePayload = ({ video_id, url_image_thumbnail }) => {
  console.log(video_id, 123)
  console.log(url_image_thumbnail, 9876)
  if (typeof(video_id) != "string" || video_id == "" || video_id == undefined || video_id == null) {
    throw new customError(400,"video_id is required")
  }

  if (typeof(url_image_thumbnail) != "string" || url_image_thumbnail == "" || url_image_thumbnail == undefined || url_image_thumbnail == null) {
    throw new customError(400, "url_image_thumbnail is required");
  }

  return {
    video_id,
    url_image_thumbnail,
  };
};

const createThumbnail = async (req, res) => {
  try {
    const payload = validateCreatePayload(req.body);
    console.log(payload, 45678);
    const newThumbnail = await thumbnailService.createThumbnail(payload);
    res.status(201).json(generateResponse(201, "success create thumbnail", newThumbnail));
  } catch (error) {
    responseError(res, error);
    return;
  }
};

const getAllThumbnail = async (req, res) => {
  try {
    const dataThumbnails = await thumbnailService.getAllThumbnail();
    res.status(200).json(generateResponse(200, "success get all thumbnail", dataThumbnails));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getThumbnailById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataThumbnail = await thumbnailService.getThumbnailById(id);
    res.status(200).json(generateResponse(200, "success get thumbnail by id", dataThumbnail));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateThumbnail = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updateThumbnail = await thumbnailService.updateThumbnail(id, newData);
    res.status(200).json(generateResponse(200, "success update thumbnail by id", updateThumbnail));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteThumbnail = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteThumbnail = await thumbnailService.deleteThumbnail(id);
    res.status(200).json(generateResponse(200, "success delete thumbnail by id", deleteThumbnail));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createThumbnail,
  getAllThumbnail,
  getThumbnailById,
  updateThumbnail,
  deleteThumbnail,
};
