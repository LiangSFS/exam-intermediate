const crypto  = require("crypto");

module.exports = function  createSign(param, accessKeySecret) {
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
    var signStr = [];
    for (let i in param) {
        if ({}.hasOwnProperty.call(param, i)) {
          let encodeEachParam = encodeURIComponent(i) + "=" + encodeURIComponent(param[i]);
          signStr.push(encodeEachParam);
        }
    }
    signStr.sort();
    signStr = signStr.join("&");
    signStr = "POST&%2F&" + encodeURIComponent(signStr);
    const sign = crypto.createHmac("sha1", accessKeySecret + "&")
        .update(signStr)
        .digest("base64");

    return sign;
};
