const Koa=require('koa');//node加载模块
const app=new Koa();
app.use(async ctx=>{   //async异步操作 cty是形参
    ctx.body='Hello World';
});
app.listen(3000,()=>{
    console.log('服务开启成功')
});
