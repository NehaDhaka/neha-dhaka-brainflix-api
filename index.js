const express = require("express");
const fs = require("fs");
const app = express();

fs.readFile("./data/videos.json", (err, data) => {
  if (err) {
    return console.log("Error reading file: ", err);
  }
  console.log(JSON.parse(data));
});
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(8080, () => {
  console.log("Hello, world!");
});
