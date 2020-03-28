const through = require("through2");

let total = 0;
/*
  Streams support Buffer or String, but this is how you can make a stream of Objects
*/
/*
  this would be the standard/node-built-in way to do it
  pipe(through({ objectMode: true }, write));
  but through2 has a shorthand for that .obj()
 */
process.stdin.pipe(through.obj(transform)).pipe(through.obj(write));

function transform(buf, enc, next) {
  total += buf.length;
  next(null, {
    lenght: buf.length,
    totalLength: total
  });
}

function write(obj, enc, next) {
  console.log("obj=", obj);
  next();
}
