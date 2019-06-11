//node实现服务器
var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"text/plain"});//状态码   告诉浏览器文本类型
    response.end("hello");//或response.write("hello") response.end()；

}).listen(3000);
console.log("server start")
