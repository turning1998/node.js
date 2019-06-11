const util=require('util');
function B(){
    this.name="b";
    this.bb=function(){
        console.log("bb");
    }
}
B.prototype.bbb=function(){
    console.log("cc");
}
function C(){
   //B.call(this); 
   this.age="c";
}
util.inherits(C,B);
var c=new C();
// c.bb(); 
c.bbb();
console.log(c.name);

