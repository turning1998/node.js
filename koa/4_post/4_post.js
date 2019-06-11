//koa模拟post请求
const Koa=require("Koa");
const app=new Koa();
app.use(async ctx=>{  //ctx是形参 自带内容
    let data="";//叠加数据
    ctx.req.on('data',chunk=>{  //监听data事件,每次收到表单提交的数据时就触发
        console.log(chunk);//chunk数据是二进制
        data+=chunk;
    });
    ctx.req.on('end',()=>{    //接收表单提交数据完成后执行
        data=decodeURI(data);//解码
        console.log(data);
    });
    ctx.body="123";
})
app.listen(3000,()=>{
    console.log('ok');
});