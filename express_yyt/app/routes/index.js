'use strict';
// 使用一个变量储存函数对象
var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {
// 实例化函数对象
    var clickHandler = new ClickHandler(db);

    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
// 定义一个新的路由，当路径为api/clicks的HTTP GET的时候，所要执行的getclicks函数
    app.route('/api/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);
};



// 路由文件内部 首先注入每个路由口中涉及到的方法文件，并且将路由函数暴露出去