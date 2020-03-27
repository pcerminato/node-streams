const concat = require("concat-stream");
const http = require("http");
const qs = require("querystring");
const through = require("through2");

const server = http.createServer(function(req, res) {
  req.pipe(counter()).pipe(
    concat({ encoding: "string" }, function onbody(body) {
      const params = qs.parse(body);
      console.log(params);
      res.end("ok\n");
    })
  );
});

// limit of bytes
function counter() {
  let size = 0;
  return through(function(buf, enc, next) {
    size += buf.length;
    if (size > 20) {
      next(null, null);
    } else {
      next(null, buf);
    }
  });
}

server.listen(5000);
