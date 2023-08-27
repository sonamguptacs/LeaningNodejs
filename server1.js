
/** creates server without declaring extra variables
 * creating a chain of function calls using . notation
 */
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": 'text/plain' });
    res.end('Hello World server 1');
}).listen('1337');