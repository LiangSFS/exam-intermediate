const crypto  = require("crypto");

module.exports = function  createSign(param, accessKeySecret) {
    var signStr = [];
    for (var i in param) {
        if ({}.hasOwnProperty.call(param, i)) {
          signStr.push(encodeURIComponent(i)+"="+encodeURIComponent(param[i]));
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
