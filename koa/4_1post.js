const Koa=require('koa');
const app=new Koa();
const bodyparser=require('koa-bodyparser');
app.use(bodyparser());
app.use(async ctx=>{
    let data=ctx.request.body;
    ctx.body=data;
});
app.listen(3001,()=>{
    console.log('ok');
});
