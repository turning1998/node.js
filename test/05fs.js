/* 
三码一致
文件编码  ANSI Unicode UTF-8
浏览器解码 gbk/gb2312/gb18030 UTF-8
数据库解码 UTF-8 
*/

const fs=require("fs");
/* var data=fs.readFileSync('./1.txt','utf-8');//同步
console.log(data);
console.log(data.toString()); */
//异步
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
});
console.log("end");