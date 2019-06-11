function Demo(){
    this.a="类属性";
    this.b=function(){
        console.log("类方法");
    }
}
//(1)
module.exports=Demo;
//exports=Demo; 报错  //exports不能改变(不能赋值)
//(2)直接赋值导出
/* module.exports={
    'b':function(){
        console.log('哈哈');
    }

} */
/* (3)
exports.b=function(){
    console.log('哈哈');
} */


