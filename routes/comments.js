app.post("/videos/:id/comments", (req, res) => {
  const requestBody = req.body;
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return console.log(err);
    const videoDetail = JSON.parse(data);
    let videoIndex;
    const requestedVideo = videoDetail.find((video, index) => {
      if (video.id === req.params.id) {
        videoIndex = index;
        return video;
      }
    });
    requestedVideo.comments.push(req.body);
    videoDetail[videoIndex] = requestedVideo;

    fs.writeFile("./data/videos.json", JSON.stringify(videoDetail), (err) => {
      if (err) return console.log(err);
      res.status(201).send(requestBody);
    });
  });
});

app.delete("/videos/:id/comments/:commentId", (req, res) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) return console.log(err);
    const videoDetail = JSON.parse(data);
    let videoIndex;
    const requestedVideo = videoDetail.find((video, index) => {
      if (video.id === req.params.id) {
        videoIndex = index;
        return video;
      }
    });
    const filteredComments = requestedVideo.comments.filter(
      (comment) => comment.id !== req.params.commentId
    );

    requestedVideo.comments = filteredComments;
    videoDetail[videoIndex] = requestedVideo;

    fs.writeFile("./data/videos.json", JSON.stringify(videoDetail), (err) => {
      if (err) return console.log(err);
      res.status(204).send("Successfully deleted");
    });
  });
});
