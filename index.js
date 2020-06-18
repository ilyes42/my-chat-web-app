const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("a client connected!");
  socket.on("msg", (msg) => {
    io.emit("msg", msg);
  });
});

server.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
