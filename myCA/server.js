const https = require("https"); // load https module, allows for encrypted connections
const fs = require("fs"); // allows the script to read files from disk

const options = {
  key: fs.readFileSync("server.key.pem"),  // gets server key
  cert: fs.readFileSync("server.cert.pem")  // gets server certificate
};

https.createServer(options, (req, res) => { // creates https server
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from secure Node.js HTTPS server!\n");  // content sent to browser
}).listen(8443, "0.0.0.0", () => { // runs on port 8443, listens to all network interfaces
  console.log("Node HTTPS server running at https://192.168.1.32:8443"); // message for testing
});
