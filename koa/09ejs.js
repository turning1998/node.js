const Koa= require('koa');
const app=new Koa();
const views =require('koa-views');
const path =require('path');
//加载模板
app.use(views(path.join(__dirname,'./09views'),{//  ./09viewshtml文件
    extension:'ejs'
}))
app.use(async ctx=>{
    let title="hello";
    await ctx.render('index',{
        title,
        list:[ {name:'xx',age:11},
               {name:'tt',age:22},
               {name:'zz',age:33},
               {name:'yy',age:44}
            ]
    })
})
app.listen(3001,()=>{
    console.log('ok');
});