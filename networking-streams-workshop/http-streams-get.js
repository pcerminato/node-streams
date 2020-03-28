const http = require("http");

http
  .request(
    {
      url: "/",
      host: "localhost",
      port: 5000,
      method: "GET"
    },
    function(res) {
      console.log(res.statusCode);
      res.pipe(process.stdout);
    }
  )
  .end();
