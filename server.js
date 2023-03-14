//Create new server
const express = require("express");
const server = express();
//Serve static files

server.use(express.static("public"));

//Routing Table

//index.html
server.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});
//work.html
server.get("/work", (request, response, next) => {
  response.sendFile(__dirname + "/views/work.html");
});
//about.html
server.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
server.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});
//End of Routing Table

// Start server and let it listen on port 3000
server.listen(3000, () => {
  console.log("server is running");
});
