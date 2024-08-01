/** @format */

const net = require("net");

// function main() {
const peerSockets = new Map();
const netServer = new net.Server((socket) => {
  console.log("server created with socket", socket._sockname);
  peerSockets.set(new Date().getTime(), {
    ip: socket.localAddress,
    family: socket.localFamily,
    port: socket.localPort,
  });
  console.log("peerSockets", peerSockets);
  socket.write(JSON.stringify(Object.fromEntries(peerSockets)));
});

netServer.listen(3000);
netServer.on("listening", () => {
  console.log("listening");
});

// process.nextTick(() => {
//   console.info("server started");
// });
// }

// main();
