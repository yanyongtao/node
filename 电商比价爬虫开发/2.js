const http=require('http');
const https=require('https');
const url=require('url');
function getUrl(sUrl,success,error) {
    let obj=url.parse(sUrl);
    let mod=null;
    if (obj.protocol=='http:'){
        mod=require('http')
    }else {
        mod=require('https')
    }
    let req=mod.request({
        hostname:obj.hostname,
        path:obj.path
    },res=>{
        if (res.statusCode!=200) {
            let arr=[];
            res.on('data',buffer=>{
                arr.push(bffer)
            })
            res.on('end',()=>{
                let b=Buffer.concat(arr)
                //数据接收完了
                success && success(b);
            })
        }else {
            console.log('出错了',res+statusCode);
            error && error()
        }
    });
    //通信错误
    req.on('error',err=>{
        console.log('出错了',err);
        error && error(err);
    })
    req.end();
}
getUrl('https://www.tmall.com/',buffer=>{
    console.log('成功',buffer.toString());
},()=>{
    console.log('失败');
});
