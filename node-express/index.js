const express = require('express'),
http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 8008;

const app = express();
app.use(morgan('dev'));
console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
console.log(req.headers);
console.log("req files "+req.files);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, function() {
console.log(`Server running at http://${hostname}:${port}/`);
});