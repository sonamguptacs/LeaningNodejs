const async = require('async');
const fs = require('fs');
const http = require('http');
const path = require('path');
const _ = require('underscore');

console.log('listening on 1300');

http.createServer(function (req, res) {
    const filePath = path.join('.', req.url)
    
    async.series([
        function (callback) {
            fs.stat(filePath, function (err, stats) {
                if (err) {
                    return callback(err)
                }

                if (!stats.isFile()) {
                    return callback(new Error('not a file'));
                }

                callback(null);
            })
        },

        function (callback) {
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    return callback(err);
                }
                return callback(null, data);
            })
        }
    ], function (err, results) {
        if (err) {
            res.writeHead(400);
            res.end(err.message);
        } else {

            res.end(_.last(results));
        }
    })

}).listen(1300);