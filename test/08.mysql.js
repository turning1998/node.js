const mysql=require('mysql');
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'123456',
    database:"myfriend"
});
connection.connect();
sql='SELECT * FROM user';
connection.query(sql,function(err,result){
    if(err){
        console.log(err.message);
        return
    };
    console.log("data:"+result);
});