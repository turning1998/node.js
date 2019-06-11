//module.exports可以把类，方法，数组，对象,类公布给外部文件,module.exports可直接导出(直接赋值)
//exports只能以引用的方式把值,方法,数组,对象公布给外部文件,exports不可以直接导出
var a=1;
var b=['arr1','arr2'];
var c={name:'对象',age:12};
var d=function t1(){
    console.log("函数");
}


//(1)module.exports导出 
/* module.exports.a=a;
module.exports.b=b; 
module.exports.c=c;  
 module.exports.d=d;   */
//(2)module.exports直接导出
module.exports={
    a,b,c,d
} 

/* 
(3)exports导出
exports.a=a;
exports.b=b;
exports.c=c;
exports.d=d; */
 

