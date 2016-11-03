// Import statements
var router = require('./router.js');

// Problem: we need a simple way to look at a user's badge cound and JavaScript from a web browser.

// Solution: Use nodejs to perform the profile look ups and server our templates via https

// Create a web server

const https = require('https');
const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});

// Function that handles the reading of files and merge in values
    // read from file and get history
        // merge values in to string
