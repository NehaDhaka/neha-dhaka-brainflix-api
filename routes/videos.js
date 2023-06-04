const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const { loadData } = require("../utils/dataLoader");
const { requestedVideo } = require("../utils/videoPicker");

const router = express.Router();

router.get("/", (req, res) => {
  const videos = loadData();
  const videoList = videos.map((video) => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  }));
  res.status(200).send(videoList);
});

router.get("/:id", (req, res) => {
  const videos = loadData();
  const video = requestedVideo(videos, req);
  res.status(200).send(video);
});

router.post("/", upload.single("image"), (req, res) => {
  const { title, description } = req.body;
  const imageName = req.file ? req.file.originalname : "placeholder.jpg";
  const videos = loadData();
  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "Neha Dhaka",
    image: `http://localhost:8080/images/${imageName}`,
    description: description,
    views: "3,092,284",
    likes: "75,985",
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };
  videos.push(newVideo);
  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) return console.log(err);
    res.status(201).send(newVideo);
  });
});

router.put("/:id/likes", (req, res) => {
  const videos = loadData();
  const video = requestedVideo(videos, req);
  const videoIndex = videos.indexOf(video);

  const likesNum = Number(video.likes.replace(",", ""));
  video.likes = (likesNum + 1).toLocaleString();

  videos[videoIndex] = video;

  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) return console.log(err);
    res.status(200).send(likesNum.toLocaleString());
  });
});

module.exports = router;
