const express = require("express");
const router = express.Router();

const videoController = require("../controllers/video");

router.post("/", videoController.createVideo);
router.get("/", videoController.getAllVideo);
router.get("/:id", videoController.getVideoById);
router.patch("/:id", videoController.updateVideo);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
