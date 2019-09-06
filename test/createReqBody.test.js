const createReqBody = require("../src/createReqBody.js");


//const DATE_NOW =  Date.now();

//const DATE_STAMP = new Date().toISOString();

test("output reqBody", () => {
   
   //single
//   expect(createReqBody({
//      Action:  "single",
//      ReplyToAddress:false,
//      ToAddress: "bebel street",
//   }, 2)).toMatch(/&/);
   
   //batch
    expect(createReqBody({
      Action:  "batch",
      TemplateName: "hire info",
      ReceiversName: ["zhaoliu", "wangwu"]
   }, 2)).toMatch(/&/);

});


//module.exports = function createReqBody(param, accessKeySecret) {
//    const sign = createSign(param, accessKeySecret);
//
//    const signature = encodeURIComponent(sign);
//    var reqBody = ["Signature="+signature];
//    for (var i in param) {
//        reqBody.push(i+"="+param[i]);
//    }
//
//   return reqBody.join("&");
//}