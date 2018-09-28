const cookie = require('cookie');
let http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');//加密
// const histroy = require('connect-history-api-fallback');
const linkList = require('./server/userTable/playTable');
const returnMsg = require('./server/public/returnCode');
const self_random = require('./server/randomData');

let app = express();
// app.use(histroy());
app.use(cookieParser());
let router = express.Router();

/**
 * 登录接口
 *
 */
app.all('/login',bodyParser.json(),(req,res)=>{
    let name = req.query.name;
    let pwd = req.query.pwd;
    let cook = cookie.parse(req.headers.cookie);
    // console.log(cookie.parse(cook));
    if (cook.test) {
      res.json(returnMsg.successReturn)
    }else {
      linkList.searchByName([name]).then(result=>{
        result = JSON.parse(JSON.stringify(result));
        if (result && result.length > 0) {
            let word = self_random.randomMixing(6);
            linkList.updateCookie([word,name,pwd]);
            res.cookie('test',word);
            res.json(returnMsg.successReturn)
          }else{
            res.json(returnMsg.failedReturn)
          }
      })
    }
});

/**
 * 注册账号
 */
app.all('/registered',bodyParser.json(),(req,res)=>{
    let name = req.body.name;
    let tel = req.body.tel;
    let age = req.body.age;
    let date = req.body.date;
    let arr = [name,tel,age,date];
    linkList.insertIntoTable(pool,arr).then(result=>{
        console.log(result);
    });
});


let server = app.listen(8081,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});






