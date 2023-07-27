const commentRepo = require("../repository/comment");

const createComment = async (dataComment) => {
  try {
    const newComment = await commentRepo.createComment(dataComment);
    return newComment;
  } catch (error) {
    throw new Error("service : Failed to create comment");
  }
};

const getAllComment = async () => {
  try {
    return await commentRepo.getAllComment();
  } catch (error) {
    throw new Error("service : Failed to get all comment");
  }
};

const getCommentById = async (id) => {
  try {
    return await commentRepo.getCommentById(id);
  } catch (error) {
    throw new Error("service : Failed to get comment by id");
  }
};

const updateComment = async (id, data) => {
  try {
    return await commentRepo.updateComment(id, data);
  } catch (error) {
    throw new Error("service : Failed to update comment by id");
  }
};

const deleteComment = async (id) => {
  try {
    return await commentRepo.deleteComment(id);
  } catch (error) {
    throw new Error("service : Failed to delete comment by id");
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  updateComment,
  deleteComment,
};
