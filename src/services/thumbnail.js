const thumbnailRepo = require("../repository/thumbnail");
const videoRepo = require("../repository/video");

const createThumbnail = async (dataThumbnail) => {
  try {
    await videoRepo.getVideoById(dataThumbnail.video_id)
    const newThumbnail = await thumbnailRepo.createThumbnail(dataThumbnail);
    return newThumbnail;
  } catch (error) {
    throw new Error("service : Failed to create thumbnail");
  }
};

const getAllThumbnail = async () => {
  try {
    return await thumbnailRepo.getAllThumbnail();
  } catch (error) {
    throw new Error("service : Failed to get all thumbnail");
  }
};

const getThumbnailById = async (id) => {
  try {
    return await thumbnailRepo.getThumbnailById(id);
  } catch (error) {
    throw new Error("service : Failed to get thumbnail by id");
  }
};

const updateThumbnail = async (id, data) => {
  try {
    return await thumbnailRepo.updateThumbnail(id, data);
  } catch (error) {
    throw new Error("service : Failed to update thumbnail by id");
  }
};

const deleteThumbnail = async (id) => {
  try {
    return await thumbnailRepo.deleteThumbnail(id);
  } catch (error) {
    throw new Error("service : Failed to delete thumbnail by id");
  }
};

module.exports = {
  createThumbnail,
  getAllThumbnail,
  getThumbnailById,
  updateThumbnail,
  deleteThumbnail,
};
