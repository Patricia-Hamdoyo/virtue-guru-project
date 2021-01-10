const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This would be the homepage of Virtue Guru!');
}).listen(8080);