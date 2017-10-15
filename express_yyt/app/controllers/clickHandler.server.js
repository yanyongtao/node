'use strict';

function clickHandler (db) {
// 定义一个collection为clicks ;
var clicks = db.collection('clicks');
// 定义一个方法为getClicks ;
    // this.getClicks = function (req, res) {
// 设置document里面id为false ;
        // var clickProjection = { '_id': false };
// Mongdb 获取内容的方法 ;   clickProjection为过滤结果的参数 ;
        // clicks.findOne({}, clickProjection, function (err, result) {
            // if (err) {
                // throw err;
            // }

            // res.json(result);
        // });
    // };



    this.getClicks = function (req, res) {

      var clickProjection = { '_id': false };

      clicks.findOne({}, clickProjection, function (err, result) {
       if (err) {
        throw err;
    }

    if (result) {
        res.json(result);
    } else {
        clicks.insert({ 'clicks': 1 }, function (err) {
         if (err) {
          throw err;
      }

      clicks.findOne({}, clickProjection, function (err, doc) {
          if (err) {
           throw err;
       }

       res.json(doc);
   });
  });
    }
});
  };



  this.addClick = function (req, res) {
    clicks.findAndModify({},{ '_id': 1 },{ $inc: { 'clicks': 1 } },function (err, result) {
            if (err) { throw err; }

            res.json(result);
        }
        );
};

this.resetClicks = function (req, res) {
    clicks.update({},{ 'clicks': 0 },function (err, result) {
            if (err) { throw err; }

            res.json(result);
        }
        );
};




}
// 将函数暴露出去
module.exports = clickHandler;

// 路由分流之后各个执行的方法