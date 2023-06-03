const fs = require("fs");
const cors = require("cors");
const express = require("express");
const commentRoutes = require("./routes/comments");
const videoRoutes = require("./routes/videos");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/videos", commentRoutes);
app.use("/videos", videoRoutes);

app.listen(8080, () => {
  console.log("Hello, world!");
});
