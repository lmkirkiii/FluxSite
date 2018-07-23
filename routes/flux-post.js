const express = require("express");
const router = express.Router();
const fluxController = require("../controllers/flux-post")

router.post("/", fluxController.create);
router.get("/new", fluxController.new);
router.get("/:id", fluxController.show);
router.get("/:id", fluxController.update);

module.exports = router; 