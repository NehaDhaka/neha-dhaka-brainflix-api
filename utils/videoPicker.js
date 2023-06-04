const requestedVideo = (videos, req) => {
  return videos.find((video) => video.id === req.params.id);
};

module.exports = { requestedVideo };
