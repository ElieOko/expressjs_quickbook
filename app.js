const port = 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const config = require("./config");
const QuickBooks = require('node-quickbooks');
const commondSync = require("./common/utils/fun");
const requestAxios = require("./common/service/axios")
const qbo = new QuickBooks(config.consumerKey,
  config.consumerSecret,
  config.oauthToken,
  false, // no token secret for oAuth 2.0
  config.realmId,
  false, // use the sandbox?
  true, // enable debugging?
  null, // set minorversion, or null for the latest version
  '2.0', //oAuth version
  config.refreshToken)
var token = ""
// const corsOption = {
//     credences : true,
//     origin : ['https://expressjs-quickbook.vercel.app/',"*"]
// };
// app.options('*', cors()) 
var allowlist = ['https://qkbfront.drapeauyamboka.com/']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors());
app.options('*', cors())
app.use(express.json())
app.get("/test",(req,res)=>{
  res.send("Journalisation du code")
})
app.get("/",(req,res)=>{
    //res.send("Server Runtine Nodejs Express Quickbooks Version final");
    customer_request()
    item_request()
    invoice_request()
    vendor_request()
    account_request()
    res.setHeader("Content-Type",'text/html')
    res.write(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    @import url(https://fonts.googleapis.com/css?family=Lato:100,400);

body{
  margin: 0;
  padding: 0;
  background: #459BF9;
}

.box{
  width: 240px;
  height: 150px;
  position: absolute;
  top: calc(50% - 25px);
  top: -webkit-calc(50% - 25px);
  left: calc(50% - 120px);
  left: -webkit-calc(50% - 120px);
}

.text{
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 300;
  font-size: 45px;
  position: absolute;
  top: calc(50% - 105px);
  top: -webkit-calc(50% - 105px);
  left: calc(50% - 160px);
  left: -webkit-calc(50% - 160px);
  oapcity: 1;
  -webkit-animation: fade-in-out 2.5s infinite; 
  -moz-animation: fade-in-out 2.5s infinite; 
  -o-animation: fade-in-out 2.5s infinite; 
  animation: fade-in-out 2.5s infinite; 
}

.comp{
  position: absolute;
  top: 0px;
  width: 80px;
  height: 55px;
  border: 3px solid #fff;
  border-radius: 5px;
}

.comp:after{
  content: '';
  position: absolute;
  z-index: 5;
  top: 19px;
  left: 5px;
  width: 65px;
  height: 10px;
  border-radius: 360px;
  border: 3px solid #fff;
}

.loader{
  position: absolute;
  z-index: 5;
  top: 26px;
  left: 12px;
  width: 8px;
  height: 8px;
  border-radius: 360px;
  background: #fff;
  -webkit-animation: loader 5s infinite linear 0.5s;
  -moz-animation: loader 5s infinite linear 0.5s;
  -o-animation: loader 5s infinite linear 0.5s;
  animation: loader 5s infinite linear 0.5s;
}

.con{
  position: absolute;
  top: 28px;
  left: 85px;
  width: 100px;
  height: 3px;
  background: #fff;
}

.byte{
  position: absolute;
  top: 25px;
  left: 80px;
  height: 9px;
  width: 9px;
  background: #fff;
  border-radius: 360px;
  z-index: 6;
  opacity: 0;
  -webkit-animation: byte_animate 5s infinite linear 0.5s;
  -moz-animation: byte_animate 5s infinite linear 0.5s;
  -o-animation: byte_animate 5s infinite linear 0.5s;
  animation: byte_animate 5s infinite linear 0.5s;
}

.server{
  position: absolute;
  top: 22px;
  left: 185px;
  width: 35px;
  height: 35px;
  z-index: 1;
  border: 3px solid #fff;
  background: #459BF9;
  border-radius: 360px;
  -webkit-transform: rotateX(58deg);
  -moz-transform: rotateX(58deg);
  -o-transform: rotateX(58deg);
  transform: rotateX(58deg);
}

.server:before{
  content: '';
  position: absolute;
  top: -47px;
  left: -3px;
  width: 35px;
  height: 35px;
  z-index: 20;
  border: 3px solid #fff;
  background: #459BF9;
  border-radius: 360px;
}

.server:after{
  position: absolute;
  top: -26px;
  left: -3px;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
  width: 35px;
  height: 40px;
  z-index: 17;
  background: #459BF9;
  content: '';
}

/*Byte Animation*/
@-webkit-keyframes byte_animate{
  0%{
    opacity: 0;
    left: 80px;
  }
  4%{
    opacity: 1;
  }
  46%{
    opacity: 1;
  }
  50%{
    opacity: 0;
    left: 185px;
  }
  54%{
    opacity: 1;
  }
  96%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    left: 80px;
  }
}

@-moz-keyframes byte_animate{
  0%{
    opacity: 0;
    left: 80px;
  }
  4%{
    opacity: 1;
  }
  46%{
    opacity: 1;
  }
  50%{
    opacity: 0;
    left: 185px;
  }
  54%{
    opacity: 1;
  }
  96%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    left: 80px;
  }
}

@-o-keyframes byte_animate{
  0%{
    opacity: 0;
    left: 80px;
  }
  4%{
    opacity: 1;
  }
  46%{
    opacity: 1;
  }
  50%{
    opacity: 0;
    left: 185px;
  }
  54%{
    opacity: 1;
  }
  96%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    left: 80px;
  }
}

@keyframes byte_animate{
  0%{
    opacity: 0;
    left: 80px;
  }
  4%{
    opacity: 1;
  }
  46%{
    opacity: 1;
  }
  50%{
    opacity: 0;
    left: 185px;
  }
  54%{
    opacity: 1;
  }
  96%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    left: 80px;
  }
}

/*LOADER*/
@-webkit-keyframes loader{
  0%{
    width: 8px;
  }
  100%{
    width: 63px;
  }
}

@-moz-keyframes loader{
  0%{
    width: 8px;
  }
  100%{
    width: 63px;
  }
}

@-o-keyframes loader{
  0%{
    width: 8px;
  }
  100%{
    width: 63px;
  }
}

@keyframes loader{
  0%{
    width: 8px;
  }
  100%{
    width: 63px;
  }
}


/*FADE IN-OUT*/
@-webkit-keyframes fade-in-out{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    oapcity: 1;
  }
}

@-moz-keyframes fade-in-out{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    oapcity: 1;
  }
}

@-o-keyframes fade-in-out{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    oapcity: 1;
  }
}

@keyframes fade-in-out{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    oapcity: 1;
  }
}
.content-server{
    text-align : center;
    color : #fff;
}
    </style>
    <title>Document</title>
</head>
<body>
    <h1 class="content-server">Server Quickbooks</h1>
    <div class="text">
        CONNECTING 
    </div>
      <br/>
      <div class="box">
        <div class="comp"></div>
        <div class="loader"></div>
        <div class="con"></div>
        <div class="byte"></div>
        <div class="server"></div>
      </div>
      <div class="content-server">
            <u>Type deploiement Microservice</u> <br><br><>
            <ul>
                <li>Nodejs (for run script every time)</li>
                <li>PHP/Laravel (for storage data in Database SQLServer</li>
                <li>Vuejs (for connecting our app with Quickbooks)</li>
            </ul>
      </div>
      <!-- partial -->
    <!-- <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> -->
</body>
</html>
        `
    );
    res.end();
    // fs.readFileSync("./view/index.html",(err,data)=>{
    //     if (err) {
    //       console.log(err)  
    //     } else{
    //         console.log(data)
    //         res.write(data);
    //         res.end();
    //     }
    // })
})

//Use res.status(status).send(body)


/*
const test = async ()=>{
    commondSync.setAsyncInterval(async () => {
        const promise = requestAxios.useAxiosRequestWithToken().get(`/token/refresh`)
        .then(function (response) {
            config.oauthToken   = response.data?.token.accessTokenKey;
            config.refreshToken = response.data?.token.refresh_token;
            // console.log(`----${config.refreshToken}----`)
            // return
            const qbo = new QuickBooks(config.consumerKey,
                config.consumerSecret,
                config.oauthToken,
                false, // no token secret for oAuth 2.0
                config.realmId,
                false, // use the sandbox?
                true, // enable debugging?
                null, // set minorversion, or null for the latest version
                '2.0', //oAuth version
                config.refreshToken);
            
            qbo.findCustomers({
                fetchAll: true
              }, function(e, customers) {
                console.log(customers.QueryResponse.Customer);
                const data = customers.QueryResponse.Customer
               
                    requestAxios.useAxiosRequestWithToken().post(`/create/customer`,data)
                        .then(function (response) {
                            console.log(`${response.data.message}`) 
                        }).catch((error)=>{

                        })
              })
            
            qbo.findAccounts({
                fetchAll: true
              }, function(e, accounts) {
                //console.log(accounts.QueryResponse?.Account);
                    requestAxios.useAxiosRequestWithToken().post(`/create/account`,accounts.QueryResponse.Account)
                        .then(function (response) {
                            console.log(`${response.data.message}`)
                        }).catch((error)=>{
                            console.log(error)
                        })
              })
             
            qbo.findDepartments({   
                fetchAll: true
                },(e,departements)=>{
                    console.log(departements.QueryResponse?.Departement);
                    const data = departements.QueryResponse?.Departement
                        requestAxios.useAxiosRequestWithToken().post(`/create/department`,data)
                            .then(function (response) {
                                console.log(`${response.data.message}`)
                            }).catch((error)=>{
                                console.log(`${error}`)
                            })
                })
            qbo.findEmployees({
                fetchAll:true
            },(e,employees)=>{
                console.log(employees.QueryResponse.Employee);
                const data = employees.QueryResponse.Employee
                if(employees.QueryResponse.Employee){
                    requestAxios.useAxiosRequestWithToken().post(`/create/employee`,data)
                            .then(function (response) {
                                console.log(`${response.data.message}`)
                            }).catch((error)=>{
                                console.log(`${error}`)
                            })
                }
            })
            qbo.findItems({
            fetchAll:true
            },(e,items)=>{
                console.log(items.QueryResponse?.Item);
                const data = items.QueryResponse?.Item
                    requestAxios.useAxiosRequestWithToken().post(`/create/item`,data)
                        .then(function (response) {
                            console.log(`${response.data.message}`)
                        }).catch((error)=>{
                            console.log(`${error}`)
                        })
            })
            
            qbo.findInvoices({fetchAll:true},(e,invoices)=>{
                console.log(invoices.QueryResponse?.Invoice);
                const data = invoices.QueryResponse?.Invoice
                    requestAxios.useAxiosRequestWithToken().post(`/create/invoice`,data)
                        .then(function (response) {
                            console.log(`${response.data.message}`)
                        }).catch((error)=>{
                            console.log(`${error}`)
                        })
            })
            
            qbo.findVendors({fetchAll:true},(e,vendors)=>{
                console.log(vendors.QueryResponse.Vendor);
                const data = vendors.QueryResponse.Vendor
                    requestAxios.useAxiosRequestWithToken().post(`/create/vendor`,data)
                        .then(function (response) {
                            console.log(`${response.data.message}`)
                        }).catch((error)=>{
                            console.log(`${error}`)
                        })
            })
            
            // qbo.findDeposits({fetchAll:true},(e,deposits)=>{
            //     console.log(deposits.QueryResponse.Deposit)
            // })
        })
        await promise;
        }, 5000);    
}
test()
*/
// 50minutes pour le token
// 30minutes
// 
const invoice_request = () =>{
  requestAxios.useAxiosRequestWithToken().get("/token/refresh").then(res=>{
    qbo.token = res.data.token.accessTokenKey
    config.oauthToken = res.data.token.accessTokenKey
    qbo.findInvoices({fetchAll:true},(e,invoices)=>{
      console.log(invoices.QueryResponse?.Invoice);
      const data = invoices.QueryResponse.Invoice
          requestAxios.useAxiosRequestWithToken().post(`/create/invoice`,data)
              .then(function (response) {
                  console.log(`success`)
              }).catch((error)=>{
                  console.log(`error ${error}`)
              })
  })
  }).catch(err=>{

  })
  
}

const vendor_request = ()=>{
  requestAxios.useAxiosRequestWithToken().get("/token/refresh").then(res=>{
    qbo.token = res.data.token.accessTokenKey
    qbo.findVendors({fetchAll:true},(e,vendors)=>{
      console.log(vendors.QueryResponse.Vendor);
      const data = vendors.QueryResponse.Vendor
          requestAxios.useAxiosRequestWithToken().post(`/create/vendor`,data)
              .then(function (response) {
                  console.log(`${response.data.message}`)
              }).catch((error)=>{
                  console.log(`${error}`)
              })
          })
  })
}

const employee_request = () =>{
  
}

const customer_request = ()=>{
  qbo.findCustomers({
    fetchAll: true
  }, function(e, customers) {
    console.log(customers.QueryResponse.Customer);
    const data = customers.QueryResponse.Customer
        requestAxios.useAxiosRequestWithToken().post(`/create/customer`,data)
            .then(function (response) {
                console.log(`${response.data.message}`) 
            }).catch((error)=>{
              console.log(error)
            })
  })
}

const item_request = () =>{
  requestAxios.useAxiosRequestWithToken().get("/token/refresh").then(res=>{
    qbo.token = res.data.token.accessTokenKey
    qbo.findItems({
      fetchAll:true
      },(e,items)=>{
          console.log(items.QueryResponse?.Item);
          const data = items.QueryResponse?.Item
              requestAxios.useAxiosRequestWithToken().post(`/create/item`,data)
                  .then(function (response) {
                      console.log(`${response.data.message}`)
                  }).catch((error)=>{
                      console.log(`${error}`)
                  })
      })
  }).catch(err=>{

   })

}

const account_request = () =>{
  requestAxios.useAxiosRequestWithToken().get("/token/refresh").then(res=>{
    qbo.token = res.data.token.accessTokenKey
    qbo.findAccounts({
      fetchAll: true
    }, function(e, accounts) {
      //console.log(accounts.QueryResponse?.Account);
          requestAxios.useAxiosRequestWithToken().post(`/create/account`,accounts.QueryResponse.Account)
              .then(function (response) {
                  console.log(`*******ACCOUNT***************`)
                  console.log(`${response.data.message}`)
              }).catch((error)=>{
                  console.log(error)
              })
    })
  }).catch(err=>{

  })
}


app.post("/api/create/item",(req,res)=>{
  //traitement
})
//cors(corsOptionsDelegate),

app.post("/api/create/invoice", cors(corsOptionsDelegate), async (req,res,next)=>{
  await(
    requestAxios.getApiWithConfigAxios(config.oauthToken).post("/invoice",req.body._value).then(response=>{
      res.status(201).send({message:"Enregistrement réussie"})
    }).catch(er=>{
      res.status(401).send({message:er})
    })
  )
 console.log("----Invoice------ =>",req.body._value)
})

app.post("/api/create/vendor",(req,res)=>{
  //traitement
})

app.post("/api/create/customer",(req,res)=>{
  //traitement
})

app.post("/api/create/employee",(req,res)=>{
  //traitement
})

app.post("/api/create/account",async(req,resp)=>{
     requestAxios.useAxiosRequestWithToken().get("/token/refresh").then(res=>{
        const test  = req.body
        qbo.token = res.data.token.accessTokenKey
        qbo.createAccount(test,(err,dataAccount)=>{
          if(err){
            resp.status(201).send({message:err})
          }
          else{
            resp.status(201).send({message:"Enregistrement réussie",data:dataAccount})
          }
      })
    })
    
})
    // requestAxios.getApiWithConfigAxios(config.oauthToken).post("/account",req.body._value).then(response=>{
      
    // }).catch(er=>{
    //   res.status(401).send({message:er})
   
  

app.post("/api/create/item",(req,res)=>{
  //traitement
})

https://{{baseurl}}/v3/company/{{companyid}}/invoice?minorversion={{minorversion}}

app.listen(port,()=>{
  console.log("Server is run...")
  customer_request()
  item_request()
  invoice_request()
  vendor_request()
  account_request()
})
