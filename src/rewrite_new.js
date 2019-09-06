
//const request = require("request");




const createReqBody = require('./createReqBody.js');
const sendAction = require('./sendAction.js');

const url             = 'https://dm.aliyuncs.com/';

module.exports = function (config, cb) {
    const nonce           = Date.now();
    const date            = new Date();
    const errorMsg = [];
	let param = {};
    config = config || {};
     
	 !config.accessKeyID && errorMsg.push('accessKeyID required');
     !config.accessKeySecret && errorMsg.push('accessKeySecret required');
     !config.accountName && errorMsg.push('accountName required');
 
	if (errorMsg.length) {
       return cb(errorMsg.join(','));
    }
	const reqAction = sendAction(config, errorMsg, {nonce, date});

	switch (reqAction.code)
	{
	 case 'ERROR_ACTION':
        return  cb(reqAction.msg, null);
	   break;
	 case 'ERROR_INPUT':
        return  cb(reqAction.errorMsg);
	   break;
     case 'SUCCESS_MESSAGE':
	      param = reqAction.param;
	   break;
	
	}
    //console.log(param);

    const reqBody = createReqBody(param, config.accessKeySecret);
    
//	request({
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        },
//        uri: url,
//        body: reqBody,
//        method: 'POST'
//    }, function (err, res, body) {
//        cb(err, body);
//    });

    //console.log(reqBody, axios);
	console.log("error end");
//	return await axios.post(url, reqBody, {
//	  headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        }
//	}).catch( err => cb(err));
   
    console.log({url, reqBody, cb});
	return {url, reqBody, cb};
};