const Koa=require('koa');
const app=new Koa();
const Router =require('koa-router');
const router =new Router();
router.get('/abc',(ctx,next)=>{ //路径
    ctx.body='xxxxxxx';//返回内容
});
router.get('/123',(ctx,next)=>{ //路径
    ctx.body='11111111111111';//返回内容
 
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001,()=>{
    console.log('ok');
});
