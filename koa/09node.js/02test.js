const fs=require("fs");
fs.readFile('1.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log("over");