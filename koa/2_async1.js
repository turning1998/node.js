 function t1(){
    return new Promise(res=>{
        setTimeout(()=>{
            console.log(1);
            res();
        },2000)
    })
}
async function fn(){
    await t1(); //等到tl()执行完，才会继续向下执行
    console.log(2);
}
fn();
/*
输出：
1
2

*/