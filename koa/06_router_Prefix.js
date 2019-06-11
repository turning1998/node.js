const Koa=require('koa');
const app=new Koa();
const Router =require('koa-router');
const router =new Router({
    prefix:'/login'
});
//localhost:3001/login/abc   后端处理
router.get('/abc',(ctx,next)=>{ //路径
    ctx.body='abbbbbbbbbbbbbbbb';//返回内容
});
router.get('/123',(ctx,next)=>{ //路径
    ctx.body='1111111111';//返回内容
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001,()=>{
    console.log('ok');
});
