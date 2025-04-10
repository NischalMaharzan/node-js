const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://root:root@mongo:27017/?authSource=admin")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("<h5>Hi Nischal .</h5>");
  console.log("Ran from Here");
});
app.enable("trust proxy");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
