// let user = require("./User");

let http = require("http");//加载http模块

let url = require("url");

let util = require("util");

let fs = require("fs");//加载fs文件系统模块


let server = http.createServer((req,res) => {//创建一个server(服务器)

	//res.statusCode = 200;

	//res.setHeader("Content-Type","text/plain;charset=utf-8");//设置服务端响应头

	let pathname = url.parse(req.url).pathname;

	fs.readFile(pathname.substring(1),(err,data) => {
		if(err){
			res.writeHead(404,{
				"Content-Type":"text/html"
			})
		}else{
			res.writeHead(200,{
				"Content-Type":"text/html"
			})

			res.write(data.toString());
		}
		res.end()//util.inspect(url.parse(req.url))
	});

});


server.listen(3000,"127.0.0.1",() => {//监听3000端口

	console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/ 来进行访问")

})