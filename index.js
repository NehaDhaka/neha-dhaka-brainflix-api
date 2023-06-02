const fs = require("fs");
const cors = require("cors");
const express = require("express");
const commentRoutes = require("./routes/comments");
const videoRoutes = require("./routes/videos");

const app = express();

app.use(cors());
app.use(express.json());
app.use("", commentRoutes);
app.use("", videoRoutes);

app.listen(8080, () => {
  console.log("Hello, world!");
});
