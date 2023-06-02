const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

router.get("/videos", (req, res) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return err;
    const videosDetail = JSON.parse(data);
    const videoList = videosDetail.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      };
    });
    res.status(200).send(videoList);
  });
});

router.get("/videos/:id", (req, res) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return err;
    const videosDetail = JSON.parse(data);
    const requestedVideo = videosDetail.find(
      (video) => req.params.id === video.id
    );
    res.status(200).send(requestedVideo);
  });
});

router.post("/videos", (req, res) => {
  const requestBody = req.body;
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return console.log(err);
    const videosDetail = JSON.parse(data);
    videosDetail.push(requestBody);
    fs.writeFile("./data/videos.json", JSON.stringify(videosDetail), (err) => {
      if (err) return console.log(err);
      res.status(201).send(requestBody);
    });
  });
});

module.exports = router;
