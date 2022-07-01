const http=require('http');
const fs = require('fs');

//reading the file 


const server=http.createServer((req,res)=>{

    fs.readFile('message.txt',(err,line)=>{
        if(err) throw err;
        const arr=line.toString().split(',');
        arr.forEach((value)=>{
            res.write(`<body>${value}</body>`)
            //console.log(value);
        });
    });

    //requests to the server
    //console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write('<html>');
        res.write('<head><title>Enter the message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button><body>');
        res.write('</html>');
        return res.end();
    }


    //resoponses from the server

    if(url==='/message' && method==='POST') {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            console.log(parsebody);
            const message=parsebody.split('=')[1];
            let data=fs.createWriteStream('message.txt',{   
                //this method allows us to store multiple 
                //input data in a file
                flags:'a'   // 'a' means appending (old data will be preserved)
            });
            data.write(message);
            data.write(',');
            res.statusCode=302;
            res.setHeader('location','/');
            return res.end();
        })
    }
    //res.setHeader('Contect-Type','text/html');
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