// temp proj
var firtstElement = string.firtstElement;
if(firtstElement == "ele")
{
    firtstElement = "GET ";
}else{
    firtstElement = "SET ";
}

var http = require('http');
var static = require('node-static');

function accept(req, res) {

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache'
    });
  
    res.end("OK");
  }
