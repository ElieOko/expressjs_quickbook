const consumerKey       = "AByqKYSTcV3oxdNfqqqsOFGVvC5ZQTYNRyffN49Lcl2NiCgesl";
const consumerSecret    = "blCZ2Ct77lrCWNaPao3SQucPX776E3KgNrzNCfod";
let oauthToken          = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..N5d7sQoej5vbU82YmBmo5A.Q81AOd3eKEZezgsqFbBNXtqh5q-vt73zSnP_jiVwnIB88hTAZkm8wJcu8APv19AFy6JDjRGwhv-r473JtkEzZ1tjJRMcBP78HBF-oLi_X639H5ECHxB5AXDTDlhFVCGFFbLe48Ff2lR5JH8e2Blj6pa4hseiBlJGBlZNYeBVX9w7j-uCvse6LO6m3rad1Wacs2mZPx-X6NK3SVeJ7X3IJf8LOHmzOAaeyi4NrPLWrh-24SzOKMGTHM0bBcMYC0g_PHpzDKNTHZY4KomMtVDZU56hrSdT-4fmjuqWLeqd--vBrAatZNnhv3zP1wzHrQxNCmKQSJlYQsANuYNgcK21ZKIm_8ZqOlrtc6njXjtEnkJSPGe-Z6JNPoi5pWanAAgfFg4bVwr3AaJtshFcv8BANh14761xiCy2I5PXv_aEVHqMnNWHr5Ob7K4U1_nAxuX-FJTo0KbcGZEyx6M9uhY5EfNt9oBga-k2zJJPGSsCBSkUIw3tq61iQrLerNGrFGQImwevE_QPJMTd0gAGFYltHLEObsvo-BatkcbNBBirDoilLXFnSnUBum1I6_DAPTqCamA3zYRmbAF66g6mWXzCq0q0ke3KAhwrPbhLqxVexYJ4DwO-Jqw9dHatrzPWZTcKXK1JJTj9nEpi5zerz0NfCyyBodw5eWhe_Q9IGy2IrelUpkPA1vHqSZJx9vnb-PjqB1a1AyTuENK-SCR4rTNdUT8TWkzfbz5cqWRHBWDbyUw.H8ASLNIagg_Y8mnSnoK9Gw";
let realmId             = "9341452065431980";
let refreshToken        = "AB11721640994FshOHeTVHJAvc7qn7wcjdMktSAbeQ5pB8Obwp";
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
let clientId = "AByqKYSTcV3oxdNfqqqsOFGVvC5ZQTYNRyffN49Lcl2NiCgesl";
let clientSecret ="blCZ2Ct77lrCWNaPao3SQucPX776E3KgNrzNCfod";
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