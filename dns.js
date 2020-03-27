const dns = require("dns");

dns.lookup("dowjones.com", function(err, address, family) {
  if (err) {
    throw err;
  }

  console.log(`Adress: ${address}. Family: IPv${family}`);
});
