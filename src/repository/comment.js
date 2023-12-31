const { commentModel } = require("../models");

// post
const createComment = async (data) => {
  try {
    const saveComment = await commentModel.create(data);
    return saveComment;
  } catch (error) {
    throw new Error("repo : Failed to create comment");
  }
};

// get all comment
const getAllComment = async () => {
  try {
    const comments = commentModel.find();
    return comments;
  } catch (error) {
    throw new Error("repo : Failed to get all comment");
  }
};

// get by id
const getCommentById = async (id) => {
  try {
    return await commentModel.findById(id);
  } catch (error) {
    throw new Error("repo : Failed to get comment by id");
  }
};

const getCommentByVideoId = async (id) => {
  try {
    return await commentModel.find({ video: id });
  } catch (error) {
    throw new Error("repo : Failed to get comment by video id");
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  getCommentByVideoId,
};
