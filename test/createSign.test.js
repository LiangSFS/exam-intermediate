const createSign = require("../src/createSign.js");

//const DATE_NOW =  Date.now();
//const DATE_STAMP = new Date().toISOString();

test("output sign", () => {


  //single
   expect(createSign({
      Action:  "single",
      ReplyToAddress:false,
      ToAddress: "bebel street",
   }, 2)).toMatch(/./);
   
   //batch
    expect(createSign({
      Action:  "batch",
      TemplateName: "hire info",
      ReceiversName: ["zhaoliu", "wangwu"],
   }, 2)).toMatch(/./);
});

//module.exports = function  createSign(param, accessKeySecret) {
//  var signStr = [];
//    for (var i in param) {
//        signStr.push(encodeURIComponent(i)+"="+encodeURIComponent(param[i]));
//    }
//    signStr.sort()
//    signStr = signStr.join("&");
//    signStr = "POST&%2F&" + encodeURIComponent(signStr);
//    const sign = crypto.createHmac("sha1", accessKeySecret + "&")
//        .update(signStr)
//        .digest("base64");
//
//    return sign;
//}