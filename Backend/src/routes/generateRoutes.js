const express = require("express");
const router = express.Router();

const { generateUI } = require("../controllers/generateController");

router.post("/generate-ui", generateUI);

module.exports = router;