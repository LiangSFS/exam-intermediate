const createSign = require('../src/createSign.js');

const DATE_NOW =  1567745074817;
const DATE_STAMP = "2019-09-06T04:44:34.817Z";

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
		SignatureNonce: DATE_NOW,
		SignatureVersion: '1.0',
		TemplateCode: undefined,
		Timestamp: DATE_STAMP,
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
	   SignatureNonce: DATE_NOW,
	   SignatureVersion: '1.0',
	   TemplateCode: undefined,
	   Timestamp: DATE_STAMP,
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