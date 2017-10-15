const http=require('http');
//http.creatServer() //服务器 别人找
let req=http.request({
    hostname:'www.kaikeba.com',  //请求的域名
    path:'/course/16'    //请求的地址
},res=>{
    console.log('成功')
    let arr=[];
    res.on('data',buffer=>{
        arr.push(buffer);
    });
    res.on('end',()=>{
        let b=Buffer.concat(arr);
        console.log(b.toString());
    })
})  //找别人
req.end(); //准备工作结束 开始请求
req.on('error',err=>{
    console.log('有错')
})
  //res   响应对象
  //res.statusCode  返回的服务器码
