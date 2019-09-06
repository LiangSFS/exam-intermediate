const createReqBody = require('../src/createReqBody.js');


const DATE_NOW =  1567745074817;
const DATE_STAMP = "2019-09-06T04:44:34.817Z";

test('output reqBody', () => {
   
   //single
//   expect(createReqBody({
//	    AccessKeyId: 1,
//		Format: 'JSON',
//		Action:  'single',
//		AccountName: "zhangsan",
//		AddressType:0,
//
//        ReplyToAddress:false,
//        ToAddress: 'bebel street',
//
//		SignatureMethod: 'HMAC-SHA1',
//		SignatureNonce: DATE_NOW,
//		SignatureVersion: '1.0',
//		TemplateCode: undefined,
//		Timestamp: DATE_STAMP,
//		Version: '2015-11-23'
//	}, 2)).toMatch(/&/);
	
	//batch
    expect(createReqBody({
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
	}, 2)).toMatch(/&/);

});


//module.exports = function createReqBody(param, accessKeySecret) {
//    const sign = createSign(param, accessKeySecret);
//
//    const signature = encodeURIComponent(sign);
//    var reqBody = ['Signature='+signature];
//    for (var i in param) {
//        reqBody.push(i+'='+param[i]);
//    }
//
//	return reqBody.join('&');
//}