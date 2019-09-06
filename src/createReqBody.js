const createSign = require("./createSign.js");

module.exports = function createReqBody(param, accessKeySecret) {
    const sign = createSign(param, accessKeySecret);

    param = {
      AccessKeyId: 1,
      Format: "JSON",
      AccountName: "zhangsan",
      AddressType: 0,
      SignatureMethod: "HMAC-SHA1",
      SignatureNonce: Date.now(),
      SignatureVersion: "1.0",
      TemplateCode: 1,
      Timestamp: new Date().toISOString(),
      Version: "2015-11-23",
      ...param
    };

    const signature = "Signature=" + encodeURIComponent(sign);
    var reqBody = [signature];
    for (let i in param) {
        if ({}.hasOwnProperty.call(param, i)) {
          let eachParam = param[i] &&  i + "=" + param[i];
          reqBody.push(eachParam);
        }
    }

   //console.log(reqBody.join("&"));

   return reqBody.join("&");
};