const fs = require("fs");
const through = require("through2");
const path = require("path");

const file = path.resolve(path.join(__dirname, "../files/greetz.txt"));

//process.stdin.
fs.createReadStream(file)
  .pipe(through(write))
  .pipe(process.stdout);

function write(buf, enc, next) {
  this.push(" love ");
  next(null, buf.toString().toUpperCase());
  this.push(" love ");
}
