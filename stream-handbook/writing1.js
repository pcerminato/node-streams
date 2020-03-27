const fs = require("fs");
const ws = fs.createWriteStream("message.txt");

process.stdout.write("hello world");

ws.write("hello ");

setTimeout(function() {
  ws.end(" world\n");
}, 1000);
