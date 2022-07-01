const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    //requests

    //responses
    if(url==='/'){
        res.write(`
        <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                Wellcome to my NODE JS Project!.
            </body>
        </html>
        `);
        return res.end();
    }
    if(url=='/home'){
        res.write(`
        <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                Wellcome to Home!.
            </body>
        </html>
        `);
        return res.end();
    }
    if(url=='/about'){
        res.write(`
        <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                Wellcome to About Us page!.
            </body>
        </html>
        `);
        return res.end();
    }
    if(url=='/node'){
        res.write(`
        <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                Wellcome to Node JS project!.
            </body>
        </html>
        `);
        return res.end();
    }

});

server.listen(3000);