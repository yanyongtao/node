const http=require('http');
let server = http.createServer(function (req,res) {
    console.log("hello");
    response.write('sadasfddsfsfs');
    response.end();

});
server.listen(8080);
