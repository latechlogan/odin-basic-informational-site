const http = require("node:http");
const fs = require("node:fs");

const hostname = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
