const createSign = require('./createSign.js');

module.exports = function createReqBody(param, accessKeySecret) {
    const sign = createSign(param, accessKeySecret);

    const signature = encodeURIComponent(sign);
    var reqBody = ['Signature='+signature];
    for (var i in param) {
        reqBody.push(i+'='+param[i]);
    }

	console.log(reqBody.join('&'));

	return reqBody.join('&');
}