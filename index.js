const http = require("node:http");
// const fs = require("node:fs");

const hostname = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  //
});

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
});
