# Node.js Server Shutdown Issue

This repository demonstrates a potential issue with Node.js servers not always shutting down gracefully.  The `server.js` file contains a simple HTTP server. The problem lies in the potential for unhandled requests during the server's shutdown process.  If a request arrives just as the server is closing, it may not be handled correctly, leading to errors or unexpected behavior.

The `serverSolution.js` file provides a solution to mitigate this issue using the `server.close()` method and an event listener for the `'close'` event.

## How to Reproduce

1. Clone this repository.
2. Run `server.js`.
3. While the server is running, send several requests using tools like `curl` or a web browser.
4. Try shutting down the server using `Ctrl+C`. Observe that some requests might get a `ECONNRESET` or other errors.

## Solution

The solution is to properly handle the shutdown process using `server.close()` and listening for the `'close'` event.  This ensures all pending requests are processed before the server is terminated. See `serverSolution.js` for the corrected code.