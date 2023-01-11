const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express(); // create express app
var bodyParser = require('body-parser')


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//api routes
app.use("/users", require("./controller/user.controller"));
app.use("/post", require("./controller/post.controller"));
app.use(express.static(path.join(__dirname, "..", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..","build", "index.html"));
  });

// app.get("/", (req, res) => {
//   res.send("This is from express.js");
// });

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});