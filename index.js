const fs = require("fs");

const express = require("express");
const app = express();

app.get("/videos", (req, res) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return err;
    const videosDetail = JSON.parse(data);
    const videoList = videosDetail.map((video) => {
      return {
        id: "84e96018-4022-434e-80bf-000ce4cd12b8",
        title: "BMX Rampage: 2021 Highlights",
        channel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
      };
    });
    res.status(200).send(videoList);
  });
});

app.get("/videos/:id", (req, res) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return err;
    const videosDetail = JSON.parse(data);
    const requestedVideo = videosDetail.find(
      (video) => req.params.id === video.id
    );
    res.status(200).send(requestedVideo);
  });
});

// app.get("/", (req, res) => {
//   fs.readFile("./data/videos.json", (err, data) => {
//     if (err) return err;
//     res.send(JSON.parse(data));
//   });
// });

app.listen(8080, () => {
  console.log("Hello, world!");
});
