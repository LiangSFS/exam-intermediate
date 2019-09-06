

module.exports = function sendAction(config, errorMsg, {nonce, date}) {
  var param = {
      AccessKeyId: config.accessKeyID,
      Format: "JSON",
      Action:  config.action,
      AccountName:config.accountName,
      AddressType:typeof config.addressType == "undefined"? 0 : config.addressType,
      SignatureMethod: "HMAC-SHA1",
      SignatureNonce: nonce,
      SignatureVersion: "1.0",
      TemplateCode: config.templateCode,
      Timestamp: date.toISOString(),
      Version: "2015-11-23"
    };

  switch (config.action)
  {
    case "single":
       !config.toAddress &&  errorMsg.push("toAddress required");

       //if (errorMsg.length) return { code: "ERROR_INPUT", errorMsg: errorMsg.join(",") };  
        
       param = {
        ...param,
       ReplyToAddress:!!config.replyToAddress,
       ToAddress:config.toAddress
      }
       config.fromAlias && (param.FromAlias = config.fromAlias);
       config.subject && (param.Subject = config.subject);
       config.htmlBody && (param.HtmlBody = config.htmlBody);
       config.textBody && (param.TextBody = config.textBody);
     break;
    case "batch":
       !config.templateName && errorMsg.push("templateName required"); 
       !config.receiversName && errorMsg.push("receiversName required");
        
      //errorMsg.length && break;
       // if (errorMsg.length) return { code: "ERROR_INPUT", errorMsg: errorMsg.join(",") };  
      
      param = {
        ...param,
        TemplateName:config.templateName,
        ReceiversName:config.receiversName
      }
      config.tagName && (param.TagName = config.tagName);
     break;
   default: 
       return { code: "ERROR_ACTION", msg: "error action" };
  }

  if (errorMsg.length) return { code: "ERROR_INPUT", errorMsg: errorMsg.join(",") };  

 return { code: "SUCCESS_MESSAGE", param};

};