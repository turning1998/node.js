//koa方式模仿get请求
const Koa=require('koa');
const app=new Koa();
app.use(async ctx=>{
    let url=ctx.url;
    let query=ctx.query;//对象,字符串
    let queryString=ctx.querystring;
    ctx.body={
        url,
        query,
        queryString
    };
});
app.listen(3000,()=>{
    console.log('3000');
})