const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    /** Get path of file to read */
    const path = '.' + req.url;
    
    /** search for path , opens it and calls callback once it is ready to give you content */
    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(500);
            res.end(err.message);
        }
        else {
            res.writeHead(200, { 'Content': 'text/plain' });
            res.end(data);
        }
    })
}).listen(1330);