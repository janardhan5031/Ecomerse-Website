const http=require('http');

const server=http.createServer((req,res)=>{
    //requests to the server
    //console.log(req.url,req.method,req.headers);
    const url=req.url;
    if(url=='/'){
        res.write(`
        <html>
            <head>
                <title>Enter the message</title>
            </head>
            <body>
                <form action='message' method='POST'>
                    <input type='text'value=''>
                    <button type='submit'>send</button>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }


    //resoponses from the server
    res.setHeader('contect-Type','text/html');
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