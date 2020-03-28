const http = require("http");
const fs = require("fs");
const path = require("path");

const file = path.resolve(path.join(__dirname, "../files/greetz.txt"));

http
  .createServer(function(req, res) {
    if (req.method === "POST") {
      req.pipe(process.stdout);
      req.once("end", function() {
        res.end("ok\n");
      });
    } else {
      res.setHeader("content-type", "text/plain");
      const fileStream = fs.createReadStream(file);
      fileStream.pipe(res);
    }
  })
  .listen(5000);
