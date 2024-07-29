/** @format */

const net = require("net");

const netServer = new net.Server((socket) => {
  console.log("server created with socket", socket.address());
  socket.write("hello from server");
});

netServer.listen(3000);
netServer.on("listening", () => {
  console.log("listening");
});

