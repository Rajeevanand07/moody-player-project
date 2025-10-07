require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadFile = require("../service/storage.service");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/songs", upload.single("audio"), async (req, res) => {
  const fileData = await uploadFile(req.file);
  console.log(fileData);

  res.status(201).json({
    message: "song created successfullly",
  });
});

router.get("/songs", (req, res) => {
  res.json({
    message: "songs",
  });
});

module.exports = router;
