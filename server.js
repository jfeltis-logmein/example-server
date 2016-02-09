var http = require('http');

const PORT = 1337;

var server = http.createServer(function(req, res){
  res.end('Hello, World!');
});

server.listen(PORT, function(){
  console.log(`listening on ${PORT}`);
});
