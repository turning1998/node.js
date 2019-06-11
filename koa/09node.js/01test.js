const http=require("http");//引入模块
const express=require('express');
http.createServer(function(request,response){
    response.writeHead(200,{          //发送HTTP请求头，状态码：200
        'Content-Type':'text/plain' //内容类型:text/plain
    })
    response.end('Hello')//发送响应数据
}).listen(9999,()=>{
    console.log("Server start")
});