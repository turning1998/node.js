var a=1;
var s1=function t1(){
    console.log("函数");
}
var b=['a','b'];
/*(1)module.exports导出 
module.exports.a=a;
module.exports.b=b; 
 module.exports.s1=s1;  */
 module.exports={
    a,s1,b
}
/* 
exports.a=a;
exports.b=b;
exports.s1=s1;
 */

