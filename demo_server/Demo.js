let user = require("./User");



let http = require("http");//加载http模块

let url = require("url");

let util = require("util");




let server = http.createServer((req,res) => {//创建一个server(服务器)

	// url.parse(req.url,true);//,true   获取浏览器访问的链接(信息)对象 

	// util.inspect(url.parse(req.url)); //将链接(信息)对象转换成字符串

	res.statusCode = 200;

	res.setHeader("Content-Type","text/plain;charset=utf-8");//设置服务端响应头

	res.end(url.parse(req.url,true))//输出
});//


server.listen(3000,"127.0.0.1",() => {//监听3000端口

	console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/ 来进行访问")

})