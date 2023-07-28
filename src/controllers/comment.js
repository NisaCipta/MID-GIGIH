const commentService = require("../services/comment");

const generateResponse = (code, message, data) => {
  return {
    code: code,
    message: message,
    data: data,
  };
};

const createComment = async (req, res) => {
  try {
    const commentData = req.body;
    const newComment = await commentService.createComment(commentData);
    res.status(201).json(generateResponse(201, "success create comment", newComment));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllComment = async (req, res) => {
  try {
    const dataComments = await commentService.getAllComment();
    res.status(200).json(generateResponse(200, "success get all comment", dataComments));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataComment = await commentService.getCommentById(id);
    res.status(200).json(generateResponse(200, "success get all comment", dataComment));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createComment,
  getAllComment,
  getCommentById,
};
