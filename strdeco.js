const { StringDecoder } = require("string_decoder");
const utf8 = new StringDecoder("utf8");

const cent = Buffer.from([0xc2, 0xa2]);

process.stdout.write(utf8.write(cent));
