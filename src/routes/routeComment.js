const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment");

router.post("/", commentController.createComment);
router.get("/", commentController.getAllComment);
router.get("/:id", commentController.getCommentById);
router.patch("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
