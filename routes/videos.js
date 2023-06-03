const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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

router.post("/", (req, res) => {
  const { title, description } = req.body;
  const videos = loadData();
  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "Neha Dhaka",
    image: "https://i.imgur.com/i6S8m7I.jpg",
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

module.exports = router;
