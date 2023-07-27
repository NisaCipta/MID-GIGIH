const Thumbnail = require("../models/thumbnail");

// post
const createThumbnail = async (data) => {
  try {
    const newThumbnail = new Thumbnail(data);
    const saveThumbnail = await newThumbnail.save();
    return saveThumbnail;
  } catch (error) {
    console.log(error, 222)
    throw new Error("repo : Failed to create thumbnail");
  }
};

// get all thumbnail
const getAllThumbnail = async () => {
  try {
    return await Thumbnail.find();
  } catch (error) {
    throw new Error("repo : Failed to get all thumbnail");
  }
};

// get by id
const getThumbnailById = async (id) => {
  try {
    return await Thumbnail.findById(id);
  } catch (error) {
    throw new Error("repo : Failed to get thumbnail by id");
  }
};

const updateThumbnail = async (id, data) => {
  try {
    const newData = { new: true };
    const updateData = await Thumbnail.findByIdAndUpdate(id, data, newData);
    return updateData;
  } catch (error) {
    throw new Error("repo : Failed to update thumbnail by id");
  }
};

const deleteThumbnail = async (id) => {
  try {
    return await Thumbnail.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("repo : Failed to delete thumbnail by id");
  }
};

module.exports = {
  createThumbnail,
  getAllThumbnail,
  getThumbnailById,
  updateThumbnail,
  deleteThumbnail,
};
