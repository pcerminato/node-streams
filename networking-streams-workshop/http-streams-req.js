const http = require("http");

http
  .request(
    {
      url: "/",
      host: "localhost",
      port: 5000,
      method: "POST"
    },
    function(res) {
      console.log(res.statusCode);
      res.pipe(process.stdout);
    }
  )
  .end();
