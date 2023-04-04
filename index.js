// runs the server side of things
var http = require('http')
var fs = require('fs')

const PORT = 8080

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('')
    }


}) 