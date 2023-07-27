const express = require("express");
const router = express.Router();

const thumbnailController = require("../controllers/thumbnail");

router.post("/", thumbnailController.createThumbnail);
router.get("/", thumbnailController.getAllThumbnail);
router.get("/:id", thumbnailController.getThumbnailById);
router.patch("/:id", thumbnailController.updateThumbnail);
router.delete("/:id", thumbnailController.deleteThumbnail);

module.exports = router;
