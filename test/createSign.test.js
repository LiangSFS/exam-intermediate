const createSign = require('../src/createSign.js');

test('output sign', () => {

  //single
   expect(createSign({
	    AccessKeyId: 1,
		Format: 'JSON',
		Action:  'single',
		AccountName: "zhangsan",
		AddressType:0,

        ReplyToAddress:false,
        ToAddress: 'bebel street',

		SignatureMethod: 'HMAC-SHA1',
		SignatureNonce: 1567745074817,
		SignatureVersion: '1.0',
		TemplateCode: undefined,
		Timestamp: "2019-09-06T04:44:34.817Z",
		Version: '2015-11-23'
	}, 2)).toMatch(/./);
	
	//batch
    expect(createSign({
	   AccessKeyId: 1,
	   Format: 'JSON',
	   Action:  'batch',
	   AccountName: "zhangsan",
	   AddressType: 0,

	   TemplateName: 'hire info',
	   ReceiversName: ['zhaoliu', 'wangwu'],

	   SignatureMethod: 'HMAC-SHA1',
	   SignatureNonce: 1567745074817,
	   SignatureVersion: '1.0',
	   TemplateCode: undefined,
	   Timestamp: "2019-09-06T04:44:34.817Z",
	   Version: '2015-11-23'
	}, 2)).toMatch(/./);
});

//module.exports = function  createSign(param, accessKeySecret) {
//  var signStr = [];
//    for (var i in param) {
//        signStr.push(encodeURIComponent(i)+'='+encodeURIComponent(param[i]));
//    }
//    signStr.sort()
//    signStr = signStr.join('&');
//    signStr = 'POST&%2F&' + encodeURIComponent(signStr);
//    const sign = crypto.createHmac("sha1", accessKeySecret + '&')
//        .update(signStr)
//        .digest('base64');
//
//    return sign;
//}