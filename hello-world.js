/**
 * ready for node ... yeah
 */
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000; 

const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');

    res.sendDate;
})

server.listen(port,hostname, () => {
    console.log(`server running on port`)
});