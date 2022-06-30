const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('jani');
    return 'jani';
})

server.listen(4000);