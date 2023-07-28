const Comment = require("../models/commentList");

// post
const createComment = async (data) => {
  try {
    const newComment = new Comment(data);
    const saveComment = await newComment.save();
    return saveComment;
  } catch (error) {
    throw new Error("repo : Failed to create comment");
  }
};

// get all comment
const getAllComment = async () => {
  try {
    const comments = Comment.find();
    return comments;
  } catch (error) {
    throw new Error("repo : Failed to get all comment");
  }
};

// get by id
const getCommentById = async (id) => {
  try {
    return await Comment.findById(id);
  } catch (error) {
    throw new Error("repo : Failed to get comment by id");
  }
};


module.exports = {
  createComment,
  getAllComment,
  getCommentById,
};
