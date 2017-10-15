'use strict';
// 依赖
var express = require('express');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;
// 将express实例化
var app = express();

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use('/img',express.static(process.cwd()+'/public/img'));
    app.use('/public',express.static(process.cwd()+'/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(3000, function () {
        console.log('Listening on port 3000...');
    });

});
// 系统入口文件 依赖注入（express注入并实例化开启端口监听、路由文件依赖注入并将实例化的express和db数据库作为参数调用使路由文件可以使用express、数据库注入） 然后连接数据库，
// app.use('/img',express.static(process.cwd()+'/public/img'));
// app.use('/controllers',express.static(process.cwd()+'/app/controllers'));
// routes(app);
// 接受来自客户端的要求和响应
// app.get('/', function (req, res) {
//     // res.send('Hello world!');
//     res.sendFile(process.cwd()+'/index.html');
// });
// 告诉node要监听的端口，用回调函数提示程序开始运行
// app.listen(3000, function () {
    // console.log('Listening on port 3000...');
// });
// ctrl+c 停止服务
// process.cwd() 显示现在的工作路径
// 
// 
// 
// 
// 
// 
// 
// 搭建简单的node服务器，分别对游览器请求返回字符串和文件
// 配置路由
// 路由是express或者node中最普遍的模式。网站程序中包含了大量的路由信息，一般要归类他们保存在不同的文件中
// 
// 在客户端和数据库之间传递数据要使用API。api是前端和数据之间的连接方式。
// 首先。我们先设置Mongdb的数据库。