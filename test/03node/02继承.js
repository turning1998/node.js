
//创建 mystream --->继承自events.EventEmitter
//继承的步骤：
//1把父类的动态成员方法拷贝子类 call() apply() bind
//2让子类的构造函数能访问到父类的构造函数  node:  util.inherits(子construct,父construct)
//当子类继承父类 子类会增加一个super_属性  此时 super_events.EventEmitter
//当子类和父类和有相同的方法时，子类会覆盖父类
//静态类： 方法 类名.属性
//动态类：方法 new.方法名
var util=require('util');
var events=require("events");
function MyStream(){
    events.EventEmitter.call(this); //1把父类的动态成员方法拷贝子类
}
util.inherits(MyStream,events.EventEmitter); //让子类的构造函数能访问到父类的构造函数

MyStream.prototype.write=function(data){
    this.emit('data',data);
}
var stream=new MyStream();
