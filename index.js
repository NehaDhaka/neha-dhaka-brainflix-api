const fs = require("fs");
const cors = require("cors");
const express = require("express");

const commentRoutes = require("./routes/comments");
const videoRoutes = require("./routes/videos");

require("dotenv").config();

const { PORT, BACKEND_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/videos", commentRoutes);
app.use("/videos", videoRoutes);

app.listen(PORT, () => {
  console.log("Hello, world!");
});
