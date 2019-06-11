//nodejs事件
const events =require("events");//引入events模块
const eventEmitter=new events.EventEmitter();//创建eventEmitter对象
//绑定connection事件处理程序
eventEmitter.on('connection',function(){
    console.log("连接成功！");//(2)
    eventEmitter.emit('data_received');//(3)触发data_received事件
});
//使用匿名绑定data_received事件
eventEmitter.on('data_received',function(){ 
    console.log("数据接收成功！");//(4)
});
eventEmitter.emit('connection');//(1)触发connection事件
console.log(*-"程序执行完成！");//(5)