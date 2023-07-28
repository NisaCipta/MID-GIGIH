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


module.exports = {
  createComment,
  getAllComment,
  getCommentById,
};
