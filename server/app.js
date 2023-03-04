const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (id) => {
    console.log(id);
    io.emit("message", `${id}`);
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
