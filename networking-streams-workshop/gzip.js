const { createGunzip } = require("zlib");
const { createHash } = require("crypto");

// compress and encript file
// cat gziped.txt.gz | node gzip
process.stdin
  .pipe(createGunzip())
  .pipe(createHash("sha512", { encoding: "base64" }))
  .pipe(process.stdout);
