// const fs =require("fs");
// const text =fs.readFileSync("dele.txt","utf-80");
// text = text.replace("content", "rohan");
// console.log('the content of file is ');
// console.log(text);
const http =require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello world');

});
server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`);
});