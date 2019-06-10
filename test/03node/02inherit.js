var util =require('util');
var events=require('events');

function People(){
    this.sleep=function(str="People"){
        console.log(str+"  sleep");
    }
    this.eat=function(str="People"){
        console.log(str+"   eat");
    }
}
function Student(){
    People.call(this);//把父类公有的方法（定义在父类的this.方法（））拷贝,但不能拷贝原型链下的方法
    util.inherits(Student,People);
  
}
//学生独有，写下原型链下
Student.prototype.learn=function(str="Student"){
    console.log(str+"   learn");
}
function Teacher(){
    People.call(this);
    util.inherits(Teacher,People);
}
Teacher.prototype.teach=function(str="Teacher"){
    console.log(str+"  teach");
}
function Programmer(){
    People.call(this);
    util.inherits(Programmer,People);
}
Programmer.prototype.code=function(str){
    console.log(str+" code");
}
var P1=new People();
P1.sleep();
P1.eat();
var S1=new Student();
S1.sleep("Student");
S1.eat("Student");
S1.learn();
var T1=new Teacher();
T1.teach();
var P1=new Programmer();
P1.code("Programmer");