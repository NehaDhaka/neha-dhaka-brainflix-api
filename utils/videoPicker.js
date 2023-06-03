const requestedVideo = (videos, req) => {
  return videos.find((video, index) => {
    if (video.id === req.params.id) {
      videoIndex = index;
      return video;
    }
  });
};

module.exports = { requestedVideo };
