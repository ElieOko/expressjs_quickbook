const consumerKey       = "ABHqhIhze3jBxLBTyRfrbL8tTcX89HlFUFXjCZTxVLKb0kMsYe";
const consumerSecret    = "BbFgaBwf5MoS57aSUAgTuVsJwvFZcfEchjWapQ1m";
let oauthToken          = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..A4i9YPS-yUWjJAMjF99OCA.DLRQ50clQfeJpFo2hRJCEz7FMdkmlb4_AA6UHr2pBzGIedX2dWnLt-VjxJ_lEdfbBhPazzCQh_h3PMVs4L3mXVFL69oiS8tugf8SfCwm3435sx35N-F7D0KPmGXiWRQb0rDfDkfAwP57HzCnkKb49CCErm89J3jd3Cvg_mjQZtBg8eCW81Y2uHPxA14_wRimEVQ7j5BqX_HezVoQScCPWAazY0ok9EMBmL7wFD4WEt2M5Wl3cSZUcLYK15JYlw0zmwacwqACRZExeytv0mShW-ZdxtSMgbkMpkX4jJXnDVzXzRfDBxL6buqRvuBFeU6wnE8VGCMwfc8VellW-1Bq5VOoAa4brOXILpTI2v187hJRCX743msV8OGFNbozZaIXOPXvBRcvuAK-iiglwbjxehph3guw9uxZUYOM-ZL6A5UhrxqWdRUNLcz0K710kMePCBYx11dUtw2nwFb82I5SC5w6mazn4XLvDmmn4t6ulMxqC83mPbojfr7TeFmWSqnPJ-oeQYJGsWxqxnf6qtLYZnUpDXXf6YD1Hvmca4VB2i3X1iwsuHTM1Md02q_32JVWk8-Rdr3_u80kSBzbAzYB_7DJA0hz7zG-A0K-opdmmKWxkNqSDAP6B8ThOC2K4WpsgSRsYl_iyTLjBXOKFpcBwM9OcZrHpbdXtFD6j5d1vU1w299gb3HYUQlwQW3FztEwXM7CeGfmVmTaZi64M2lgG1F14yGyNSdVarThPWPv6J8.1BxTHamgaHsNm-RTVqNrzg";
let realmId             = "9341452194141898";
let refreshToken        = "AB11723114655duk5ClFLznza1GeUUXVEZZcNXWy5yRWb9QERK";
const connect_handler   =[
    "com.intuit.quickbooks.accounting",
    "com.intuit.quickbooks.payment",
    "openid",
    "profile",
    "email",
    "phone",
    "address"
  ]
const connect_to_quickbooks =[
    "com.intuit.quickbooks.accounting"
  ];
const sign_in_with_intuit = [
        "openid",
        "profile",
        "email",
        "phone",
        "address"
      ]
const scope = {
    scopes:{
        connect_to_quickbooks:connect_to_quickbooks,
        connect_handler:connect_handler,
        sign_in_with_intuit:sign_in_with_intuit
    }
}
const api_uri = "https://quickbooks.api.intuit.com/v3/company/"
const redirectUri = ""
const authorization_endpoint = "https://appcenter.intuit.com/connect/oauth2";
const token_endpoint = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
const configurationEndpoint = ""
const webhookUri =""
const webhooksVerifier=""
let clientId = "ABHqhIhze3jBxLBTyRfrbL8tTcX89HlFUFXjCZTxVLKb0kMsYe";
let clientSecret ="BbFgaBwf5MoS57aSUAgTuVsJwvFZcfEchjWapQ1m";
module.exports={
    consumerKey,
    consumerSecret,
    oauthToken,
    realmId,
    refreshToken,
    scopes:scope.scopes,
    api_uri,
    redirectUri,
    authorization_endpoint,
    token_endpoint,
    configurationEndpoint,
    webhookUri,
    webhooksVerifier,
    clientId,
    clientSecret
    
}

// {
//     "clientId": "Enter ClientID",
//     "clientSecret": "Enter ClientSecret",
//     "redirectUri": "Enter Redirect URI",            // ex https://433b4c13.ngrok.io/callback
//     "configurationEndpoint": "https://developer.api.intuit.com/.well-known/openid_sandbox_configuration/",


//     "webhookUri": "Enter webhook URI",              // ex https://433b4c13.ngrok.io/callback
//     "webhooksVerifier": "Enter Webhooks Verifier"   // Enter the Webhooks Verifier from App Settings
//   }