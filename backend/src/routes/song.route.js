require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadFile, uploadImage } = require("../service/storage.service");
const songModel = require("../models/song.model");

const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/songs",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  async (req, res) => {
    const fileData = await uploadFile(req.files.audio[0]);
    const image = await uploadImage(req.files.image[0]);
    const song = await songModel.create({
      title: req.body.title,
      artist: req.body.artist,
      audio: fileData.url,
      image:image.url,
      mood: req.body.mood,
    });
    res.status(201).json({
      message: "song created successfullly",
      song: song,
    });
  }
);

router.get("/songs", async (req, res) => {
  const { mood } = req.query;
  const songs = await songModel.find({
    mood: mood,
  });
  res.status(200).json({
    message: "song feched..",
    songs: songs,
  });
});

router.get("/", async (req, res) => {
  const songs = await songModel.find({});
  res.status(200).json({
    message: "songs",
    songs: songs,
  });
});

module.exports = router;
