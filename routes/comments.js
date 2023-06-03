const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { loadData } = require("../utils/dataLoader");
const { requestedVideo } = require("../utils/videoPicker");

const router = express.Router();

router.post("/:id/comments", (req, res) => {
  const videos = loadData();
  const newComment = {
    id: uuidv4(),
    name: "Neha Dhaka",
    comment: req.body.comment,
    likes: 3,
    timestamp: Date.now(),
  };

  let videoIndex;
  const video = requestedVideo(videos, req);

  video.comments.push(newComment);
  videos[videoIndex] = video;

  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) return console.log(err);
    res.status(201).send(newComment);
  });
});

router.delete("/:id/comments/:commentId", (req, res) => {
  const videos = loadData();
  const video = requestedVideo(videos, req);
  const videoIndex = videos.indexOf(video);
  const filteredComments = video.comments.filter(
    (comment) => comment.id != req.params.commentId
  );

  video.comments = filteredComments;
  videos[videoIndex] = video;

  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) return console.log(err);
    res.status(204).send("Successfully deleted");
  });
});

module.exports = router;
