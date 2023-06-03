const fs = require("fs");

const loadData = () => JSON.parse(fs.readFileSync("./data/videos.json"));

module.exports = { loadData };
