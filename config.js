const consumerKey       = "ABHqhIhze3jBxLBTyRfrbL8tTcX89HlFUFXjCZTxVLKb0kMsYe";
const consumerSecret    = "BbFgaBwf5MoS57aSUAgTuVsJwvFZcfEchjWapQ1m";
let oauthToken          = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..XRRkpYY9F8ht8XZGU3ivTA.M2ivIl2CV9BHIGpMUcxwsIwyRKqgytTOGEFb03DoS7-Hq5sfJ0R-1FwUtz15iHE5g8VBAjC1V0kvzzM2w_2AvmjwA1sLCusUMgNQtf7ddxaSokdm06jSNpcaS47RPreyL_3K9Zg8l08-yf4ldkpGipA1wTt3FocE5P-Z9glyPoRCOr7YmKy7i4qf1aFaixN_KuZ9hMJAsctd3WEVijOdns7ZFPFuM0sM2IM9H9DQUaAGJWyLQWzM8ybJ8QGL8f4oKgvIsVrXzEUcMrIzzbqL8D8Yzl9KpGXfY10nTE7bor19rui6IBehbjnU3c5WDXBQRUjtVOIXFPTsHUbIX53C-7Kcz-d55HjrEkXsvrWBzpXz6fjI0_0eM6NTWYvr2oZ3sWPFhGrshpnQJWWb64f19ZSZTsiPzmSTLJEYHIz-atnDZ35hq8R2_3qQtd6_Y6OmS6qr8RhawI1q3WtiJiS2bs9YL42yI2Ppg5chh812l8G-lPurfFLpISZcIIhglU-hgKgkUFmVw8688_Twk2QVVd9fX0grI_sGKUilqJYZClrXFCh47iRgHOu9B1Z6_HBQqx2jZW1tF59MhQoEBHdhzrLOGqebJAzpBjZKzmkz0ls4_QnMEAOTyf_o0jO2gmuNv4SVTOcwSeVfSRLJCaIMfz8BKotaOoQj91jMXte08Ybpn5i-lRUjGkSuvE_EzgBstax3oH5qYjrrZJe2zh7GjbWqcTVtb0zSaw7wTqYY1_T8I3TJQKAy49J3XdF-GKfT.EU4Qyh3FOJc9i8UMc47F-Q";
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