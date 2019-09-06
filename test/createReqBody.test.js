const createReqBody = require("../src/createReqBody.js");


const DATE_NOW =  Date.now();

const DATE_STAMP = new Date().toISOString();

test("output reqBody", () => {
   
   //single
//   expect(createReqBody({
//       AccessKeyId: 1,
//      Format: "JSON",
//      Action:  "single",
//      AccountName: "zhangsan",
//      AddressType:0,
//
//        ReplyToAddress:false,
//        ToAddress: "bebel street",
//
//      SignatureMethod: "HMAC-SHA1",
//      SignatureNonce: DATE_NOW,
//      SignatureVersion: "1.0",
//      TemplateCode: undefined,
//      Timestamp: DATE_STAMP,
//      Version: "2015-11-23"
//   }, 2)).toMatch(/&/);
   
   //batch
    expect(createReqBody({
      AccessKeyId: 1,
      Format: "JSON",
      Action:  "batch",
      AccountName: "zhangsan",
      AddressType: 0,

      TemplateName: "hire info",
      ReceiversName: ["zhaoliu", "wangwu"],

      SignatureMethod: "HMAC-SHA1",
      SignatureNonce: DATE_NOW,
      SignatureVersion: "1.0",
      TemplateCode: undefined,
      Timestamp: DATE_STAMP,
      Version: "2015-11-23"
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