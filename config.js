const consumerKey       = "AByqKYSTcV3oxdNfqqqsOFGVvC5ZQTYNRyffN49Lcl2NiCgesl";
const consumerSecret    = "blCZ2Ct77lrCWNaPao3SQucPX776E3KgNrzNCfod";
let oauthToken          = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..Kvt3SK-q8_aZesL9Te25Mg.S8WeZrwxWV4twMIh-3zeUqDOD7ppTlo-dYrD97qbqRMDNa5YKNE72_fAS-dWxjsrnolTQykPpofalK2kdM-v5cSgykoLtChzfHVlzSKvNZz-yKJY-r_vS8uDNyph8iWKVRkP13p0qfjl6grc59u7drcBerGrA1yBnZu-lUPm1ZzEjYU72qVEf3dE3X2R2xbNLdq-vEosqJnGLhvK-jCgAxRYrK7R-1Fc5qVRetg3ao0M1VKryeeltksUliVqiR5QLfs7sOJ9TYQALr_DFx2aJGiErzmBklFy-_q9fVP0QhwFD12z44lghRY9bpwIm3mWJrol1PYowtnrij8N4MFA7ScmXon0h0RVVoIypJuaRvVcmunz42qEkhYFknt-qkIId5SwLf0Bg2e-8obn0xEx6xbpqBHjUZGeQVlzc3sdTdIcHa2dSffz8xSSeYlBFqti_0Q7jrcwpQoAi15wRDDXnbWdGjpBm6c622FMNDUs3m1M17drWHSQ5Dt500eOwKCpGYW5dSE9C6XbMJTnECrLIJXQLnsUFpFwOyrQl0-EF59WSrKgWN4YF71dLrdHzu878twhha3A1OXWS59xJfueMR-newVi6cy30GEAjA7pamh0DkolrDQ17B5wntCXcjbKsi0v7NfOfZxW0lJma2Wv4yjX9jvur2zNPpszCquKlVDkmPPsrdo3tyIzPeQt4hLL1yh-M7c12F5Mjn4DvfqFYKxGRX8Dvmw5ArEbcWMjj0cZq8GmLg1Cg_HmO0_jv48-.mQliD4Js8kpM-397c-Q7gA";
let realmId             = "9341452052352524";
let refreshToken        = "AB11726115184Ywb69qkgzTnlHoFF5N7YLtF9TysvKAndOUtNA";
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