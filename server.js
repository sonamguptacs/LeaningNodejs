/** HTTP server demonstation */

/** 'http' module required for using methods */
const http = require('http');

/** creating server */
const server = http.createServer();

function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world');
    console.log('visited'); /**will be executing twice since server makes request each time to http://localhost:1330/favicon.ico  */
    res.end();
}

/** listen for request event and call handler function */
server.on('request', handler);

/**listen on port 1330 */
server.listen(1330)
