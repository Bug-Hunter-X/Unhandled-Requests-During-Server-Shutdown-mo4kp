const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that the server might not always shutdown gracefully.  If a request comes in right as the server is closing, it could lead to unexpected behavior or errors.