const express = require("express");
const path = require("path");
const expressEdge = require("express-edge");

const mongoose = require("mongoose"); // npm i --save mongoose

const app = new express();

mongoose.connect("mongodb://localhost/node-js-blog");

app.use(express.static("public")); // get the static in public dir

app.use(expressEdge);

app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(4000, () => {
  console.log("App listening");
});
