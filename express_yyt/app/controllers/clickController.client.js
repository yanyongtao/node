//客户端点击控制层
'use strict';
(function () {
   var addButton = document.querySelector('.btn-add');
   var deleteButton = document.querySelector('.btn-delete');
   var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = 'http://localhost:3000/api/clicks';
   //保证页面加载完毕之后函数执行
   function ready (fn) {
      if (typeof fn !== 'function') {
         return;
      }
// 如果文档的属性为complete，我们就执行参数函数
      if (document.readyState === 'complete') {
         return fn();
      }
// 如果没有文档载入，就添加一个时间监听器
      document.addEventListener('DOMContentLoaded', fn, false);
   }
   /***********************************************************************************************************************************************************************/
// method是http request     url是HTTP request地址  callback为数据接收之后的回调函数
// ajax与服务器交互
   function ajaxRequest (method, url, callback) {
      //实例化ajax核心对象 XMLHttpRequest
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
         }
      };
// 配置请求对象信息
      xmlhttp.open(method, url, true);
      xmlhttp.send();
   }
   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }
   ready(ajaxRequest('GET', apiUrl, updateClickCount));
   addButton.addEventListener('click', function () {
      ajaxRequest('POST', apiUrl, function () {
         ajaxRequest('GET', apiUrl, updateClickCount)
      });
   }, false);

   deleteButton.addEventListener('click', function () {
      ajaxRequest('DELETE', apiUrl, function () {
         ajaxRequest('GET', apiUrl, updateClickCount);
      });
   }, false);
})();