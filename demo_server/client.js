let http = require("http");

let util = require("util");

http.get("http://www.imooc.com/u/card",(res) => {//在node服务端调用第三方接口
	
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});


	res.on("end", () => {
		//let result = JSON.parse(data);

		//console.log("result:" + util.inspect(result))

	})
})