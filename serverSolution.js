const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isShuttingDown = false; // Flag to indicate if the server is shutting down

const shutdown = () => {
  isShuttingDown = true;  // Set flag to true
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

// Handle requests even during shutdown if necessary
server.on('request', (req, res) => {
  if(isShuttingDown) {
    res.writeHead(503);
    res.end('Server is shutting down');
  } else {
    requestListener(req, res);
  }
});