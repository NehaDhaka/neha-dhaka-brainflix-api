const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Hello, world!");
});
