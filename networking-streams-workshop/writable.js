const fs = require("fs");
const path = require("path");

const file = path.resolve(path.join(__dirname, "../files/writable.txt"));
const stream = fs.createWriteStream(file);

stream.on("finish", function close() {
  console.log("FINISHED!");
});
stream.write("Hey\n");
stream.write("This is being writen");
stream.end();
