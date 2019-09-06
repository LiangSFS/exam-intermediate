
const sendAction = require("../src/sendAction.js");

test("input config -o param or error", () => {

   expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan" }, [], { nonce: Date.now(), date: new Date()})).toEqual({ code: "ERROR_ACTION", msg: "error action" });

   //single
   expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "single" }, [], { nonce: Date.now(), date: new Date()})).toEqual({ code: "ERROR_INPUT", errorMsg: "toAddress required" });

   //batch
   expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "batch" }, [], { nonce: Date.now(), date: new Date()})).toEqual({ code: "ERROR_INPUT", errorMsg: "templateName required,receiversName required" });

   expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "batch", templateName: "hire info" }, [], { nonce: Date.now(), date: new Date()})).toEqual({ code: "ERROR_INPUT", errorMsg: "receiversName required" }); 

});

//test("complete input output param", () => {
//
//  //single
////  expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "single", toAddress: "bebel street" }, [], { nonce: Date.now(), date: new Date()})).toEqual({ code: "SUCCESS_MESSAGE", param: {
////       AccessKeyId: 1,
////      Format: "JSON",
////      Action:  "single",
////      AccountName: "zhangsan",
////      AddressType:0,
////
////        ReplyToAddress:false,
////        ToAddress: "bebel street",
////
////      SignatureMethod: "HMAC-SHA1",
////      SignatureNonce:  Date.now(),
////      SignatureVersion: "1.0",
////      TemplateCode: undefined,
////      Timestamp: new Date().toISOString(),
////      Version: "2015-11-23"
////   }});
//  
//   //batch
//  expect(sendAction({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "batch", templateName: "hire info", receiversName: ["zhaoliu", "wangwu"] }, [], { nonce:  Date.now(), date: new Date()})).toEqual({ code: "SUCCESS_MESSAGE", param: {
//       AccessKeyId: 1,
//      Format: "JSON",
//      Action:  "batch",
//      AccountName: "zhangsan",
//      AddressType: 0,
//
//        TemplateName: "hire info",
//        ReceiversName: ["zhaoliu", "wangwu"],
//
//      SignatureMethod: "HMAC-SHA1",
//      SignatureNonce: Date.now(),
//      SignatureVersion: "1.0",
//      TemplateCode: undefined,
//      Timestamp: new Date().toISOString(),
//      Version: "2015-11-23"
//   }});
//});
//
//module.exports = function sendAction(config, errorMsg, {nonce, date}) {
//  var param = {
//        AccessKeyId: config.accessKeyID,
//      Format: "JSON",
//      Action:  config.action,
//      AccountName:config.accountName,
//      AddressType:typeof config.addressType == "undefined"? 0 : config.addressType,
//      SignatureMethod: "HMAC-SHA1",
//      SignatureNonce: nonce,
//      SignatureVersion: "1.0",
//      TemplateCode: config.templateCode,
//      Timestamp: date.toISOString(),
//      Version: "2015-11-23"
//    };
//
//  switch (config.action)
//  {
//    case "single":
//        !config.toAddress &&  errorMsg.push("toAddress required") && break;
//       param = {
//        ...param,
//        ReplyToAddress:!!config.replyToAddress,
//       ToAddress:config.toAddress
//      }
//       config.fromAlias && (param.FromAlias = config.fromAlias);
//       config.subject && (param.Subject = config.subject);
//       config.htmlBody && (param.HtmlBody = config.htmlBody);
//       config.textBody && (param.TextBody = config.textBody);
//     break;
//    case "batch":
//       !config.templateName && errorMsg.push("templateName required"); 
//        !config.receiversName && errorMsg.push("receiversName required");
//        
//      errorMsg.length && break;
//
//      param = {
//        ...param,
//        TemplateName:config.templateName,
//         ReceiversName:config.receiversNam
//      }
//      config.tagName && (param.TagName = config.tagName);
//     break;
//   default: 
//       return { code: "ERROR_ACTION", msg: "error action" };
//  }
//
//  if (errorMsg.length) {
//      return { code: "ERROR_INPUT", errorMsg: errorMsg.join(",") };  
//  }
//
// return { code: "SUCCESS_MESSAGE", param};
//
//}