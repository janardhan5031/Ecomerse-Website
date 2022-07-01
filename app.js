const http=require('http');
const fs = require('fs');

const server=http.createServer((req,res)=>{
    //requests to the server
    //console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write(`
        <html>
            <head>
                <title>Enter the message</title>
            </head>
            <body>
                <form action='message' method='POST'>
                    <input type='text'name='message'>
                    <button type='submit'>send</button>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }


    //resoponses from the server

    if(url!=='/message' && method==='POST') {
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Contect-Type','text/html');
    res.write(`
    <html>
        <head>
            <title>Document</title>
        </head>
        <body>
            <h2>this is body</h2><br>
            this is paragraph heading
        </body>
    </html>`);
    res.end();
})

server.listen(4000);