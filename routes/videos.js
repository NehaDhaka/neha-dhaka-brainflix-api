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

app.post("/videos", (req, res) => {
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
