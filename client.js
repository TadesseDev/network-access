/** @format */

const net = require("net");

const netClient = new net.createConnection(3000, () => {
  console.log("client connected");
});

netClient.on("connect", () => {
  console.log("connect");
});

netClient.on("data", (data) => {
  console.log("data", data.toString());
  netClient.write("data from client");
});
