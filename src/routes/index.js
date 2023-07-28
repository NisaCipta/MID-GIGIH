const express = require("express");
const router = express.Router();

const commentRoute = require("./routeComment");
const videoRoute = require("./routeVideo");
const productRoute = require("./routeProduct");

router.use("/comments", commentRoute);
router.use("/videos", videoRoute);
router.use("/products", productRoute);

module.exports = router;
