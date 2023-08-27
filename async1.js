const http = require('http');
const fs = require('fs');
const path = require('path');
 
http.createServer(function (req, res) {
    const filePath = path.join('.', req.url);
    /**path.join normalizes the resulting path
     * For Example if your path has lots of ... , it will clean all that up ad gives you canonical path
     */

    /**fs.stat 
     * async functions
     * gives you all statistics of file like 
     * permissions , status of the file
     */
    fs.stat(filePath, function (err, stats) {
        if (err) {
            res.writeHead(404);
            res.end(err.message);
            return;
        }

        if (!stats.isFile()) {
            res.writeHead(403);
            req.end();
            return;
        }

        fs.readFile(filePath, function (err, data) {
            if (err) {
                 res.writeHead(500);
                 res.end(err.message);
            }
            else {
                res.writeHead(200, { 'Content': 'text/plain' });
                res.end(data);
            }
        })
    })
}).listen(1330);