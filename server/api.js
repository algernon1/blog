// 可能是我的node版本问题，不用严格模式使用ES6语法会报错

const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// // 创建账号接口
// router.post('/api/login/createAccount',(req,res) => {
//     // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
//     let newAccount = new models.Users({
//         account : req.body.account,
//         password : req.body.password
//     });
//     // 保存数据newAccount数据进mongoDB
//     newAccount.save((err,data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send('createAccount successed');
//         }
//     });
// });
// // 获取已有账号接口
// router.get('/api/login/getAccount',(req,res) => {
//     // 通过模型去查找数据库
//     models.Users.find((err,data) => {
//         console.log(err+","+data)
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });

// });

// 获取文章列表
router.get('/api/article/articleList',(req,res) => {
    // 通过模型去查找数据库
    models.Articles.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });

});
// 根据id查询文章数据
router.post('/api/article/findArticle',(req,res) => {//精确查询？
    //查询数据
    var whereStr = req.body;//请求参数？
    models.Articles.find(whereStr,function(err, data){
        console.log(data)
        if (err) {
            res.send(err);
        } else {
            res.json(data[0]);
        }

    });

});

// 根据关键字文章数据
router.post('/api/article/searchArticles',(req,res) => {//精确查询？
    
    //查询数据
    //var searchReq = req.body;//请求参数？
    var query = {}
    query['articleName']=new RegExp(req.body.searchVal);//模糊查询参数
    //console.log(query) => { articleName: /第/ }
    
    models.Articles.find(query,function(err, data){
        console.log(data)
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }

    });

});



// 插入文章数据库(提交文章)
router.post('/api/article/subArticles',(req,res) => {//精确查询？

    var reqBody = req.body;

    // 实例化对象并插入数据
    console.log(reqBody)
    var monInsert = new models.Articles(reqBody);
    monInsert.save(function(err,data){
     console.log("data:"+data)
     if(err){
        console.log(err);
     }else{
        console.log(data);
     }
    });

});




module.exports = router;