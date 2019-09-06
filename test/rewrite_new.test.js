

const intermediate = require("../src/rewrite_new.js");
const axios = require("axios");

test("less key information of config output errorMsg", () => {

   expect(intermediate({}, (res) =>  console.log(res.data) )).toBeUndefined();
   expect(intermediate({accessKeyID: 1}, (res) => console.log(res.data) )).toBeUndefined();
   
   expect(intermediate({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan" }, (res) =>  console.log(res.data) )).toEqual({});

});

test("some key information of config output param", async() => {


//   //single
//   let data = intermediate({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "single", toAddress: "bebel street" }, (res) =>  console.log(res.data) );
//   expect(data).toEqual({});
//   
//   //batch
//   let data1 = intermediate({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "batch", templateName: "hire info", receiversName: ["zhaoliu", "wangwu"] }, res => { console.log(res.data) });
//   expect(data1).toEqual({});

     //single
   const {url, reqBody, cb} = intermediate({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "single", toAddress: "bebel street" }, (res) =>  console.log(res.data)
   );

   let data = await axios.post(url, reqBody, {
     headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
   }).catch( (err) => cb(err));

    //expect(data).toEqual({});
   expect(data).toBeUndefined();

   //batch
//   let {url, reqBody, cb} = intermediate({accessKeyID: 1, accessKeySecret: 2, accountName: "zhangsan", action: "batch", templateName: "hire info", receiversName: ["zhaoliu", "wangwu"] }, (res) =>  console.log(res.data) 
//   );
//    console.log(url, reqBody, cb )
//    axios.post(url, reqBody, {
//     headers: {
//            "Content-Type": "application/x-www-form-urlencoded"
//        }
//   }).then(data => {
//      console.log(data);
//     expect(data).toEqual({});
//   }, err => console.log(err)).catch( (err) => cb(err));

});


//module.exports = function (config, cb) {
//    const nonce           = Date.now();
//    const date            = new Date();
//    const errorMsg = [];
//    config = config || {};
//     
//    !config.accessKeyID && errorMsg.push("accessKeyID required");
//     !config.accessKeySecret && errorMsg.push("accessKeySecret required");
//     !config.accountName && errorMsg.push("accountName required");
// 
//   if (errorMsg.length) {
//       return cb(errorMsg.join(","));
//    }
//   const reqAction = sendAction(config, errorMsg, {nonce, date});
//
//   switch (reqAction.code)
//   {
//    case "ERROR_ACTION":
//        return  cb(reqAction.msg, null);
//      break;
//    case "ERROR_INPUT":
//        return  cb(reqAction.errorMsg);
//      break;
//     case "SUCCESS_MESSAGE":
//        const param = reqAction.param;
//      break;
//   
//   }
//  
//    const reqBody = createReqBody(param, config.accessKeySecret);
//    
////   request({
////        headers: {
////            "Content-Type": "application/x-www-form-urlencoded"
////        },
////        uri: url,
////        body: reqBody,
////        method: "POST"
////    }, function (err, res, body) {
////        cb(err, body);
////    });
//
//   axios.post(url, reqBody, {
//     headers: {
//            "Content-Type": "application/x-www-form-urlencoded"
//        }
//   }).then(res => {
//     console.log(res.data);
//   }).catch( err => cb(err));
//};