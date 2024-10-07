const express = require("express");
const path = require("path");

const app = new express();

app.use(express.static("public")); // get the static in public dir

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html")); // create html home page
});

app.listen(4000, () => {
  console.log("App listening");
});
