//读文件停2s在接收

const fs=require("fs");
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        getData(data);
    }
});
function getData(d){  //作用域
    setTimeout(function(){
        console.log(d);
    },2000);
};