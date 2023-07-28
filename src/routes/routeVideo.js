const express = require("express");
const router = express.Router();

const videoController = require("../controllers/video");

router.post("/", videoController.createVideo);
router.get("/", videoController.getAllVideo);
router.get("/:id", videoController.getVideoById);

// yang ada productnya
// router.post("/:id/:products", videoController.getVideoById);
// router.get("/:id/:products", videoController.getVideoById);
// router.post("/:id/:comments", videoController.getVideoById);
// router.get("/:id/:comments", videoController.getVideoById);

module.exports = router;
