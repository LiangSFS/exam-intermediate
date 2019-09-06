const createReqBody = require('../src/createReqBody.js');

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
//		SignatureNonce: 1567745074817,
//		SignatureVersion: '1.0',
//		TemplateCode: undefined,
//		Timestamp: "2019-09-06T04:44:34.817Z",
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
	   SignatureNonce: 1567745074817,
	   SignatureVersion: '1.0',
	   TemplateCode: undefined,
	   Timestamp: "2019-09-06T04:44:34.817Z",
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