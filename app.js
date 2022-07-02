const http=require('http');

const callbackfun=require('./routes');

const server=http.createServer(callbackfun[1]);

server.listen(4000);