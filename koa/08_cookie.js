//传参
const Koa=require('koa');
const app=new Koa();
app.use(async ctx=>{
    if(ctx.url=='/login'){ //路径
        ctx.cookies.set(  //设置cookies
            'name','login',{ //name:为属性，login:属性值
                domain:'localhost', //域名
                path:'/login', //路径
                maxAge:24*60*60*1000,//单位为毫秒
                expires:new Date('2019-12-30'),//失效时间
                httpOnly:false,//服务器是否可访问
                overwrite:false,//是否覆盖同名cookie
            }
        );
        ctx.body="cookie success"
    }else{
        ctx.body="no cookie"
    }
})
app.listen(3001,()=>{
    console.log('ok');
});
