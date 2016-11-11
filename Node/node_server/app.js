// Import statements
var router = require('./router.js');

// Problem: we need a simple way to look at a user's badge cound and JavaScript from a web browser.

// Solution: Use nodejs to perform the profile look ups and server our templates via https

// Create a web server

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
