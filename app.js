const port = 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const commondSync = require("./common/utils/fun");
const requestAxios = require("./common/service/axios")

const corsOption = {
    credences : true,
    origin : ['http://localhost:5000',"*"]
};


app.use(cors(corsOption));
app.get("/",(req,res)=>{
    res.send("Server Runtine Nodejs Express Quickbooks Version final");
   console.log("hiss ");
})



app.listen(port,()=>{
    console.log("Server is run...")
    console.log("hiss ");
})

// const test = async ()=>{
//     commondSync.setAsyncInterval(async () => {
//         const promise = requestAxios.useAxiosRequestWithToken().get(`/token/refresh`)
//         .then(function (response) {
//             const token = response.data.token 
//             if(token != null){
//                 console.log("**************************")
//                 console.log("Token eye ->",token)
//                 // router.push("/")
//                 console.log("**************************")
//                 await
//                 (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Invoice")
//                     .then((response)=>{
//                         console.log("**Hi**",response.data);
//                     await(
//                         requestAxios.getApiWithConfigStorage().post("/create/invoice",)
//                         .then((response)=>{
//                             console.log("Data -> ",response.data.msg);
//                         })
//                         .catch((error)=>{
//                             console.log(error)
//                         })
//                     )  
//                     })
//                     .catch((error)=>{
//                         console.log("**Error**",error);
//                     }))
//         //
//                 await
//                 (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Vendor")
//                     .then((response)=>{
//                         console.log("**Hi**",response.data);
//                     await(
//                         requestAxios.getApiWithConfigStorage().post("/create/vendor",)
//                         .then((response)=>{
//                             console.log("Data -> ",response.data.msg);
//                         })
//                         .catch(()=>{
            
//                         })
//                     )  
//                     })
//                     .catch((error)=>{
//                         console.log("**Error**",error);
//                     })) 
//             //
//             await
//             (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Item")
//                 .then((response)=>{
//                     console.log("**Hi**",response.data);
//                   await(
//                     requestAxios.getApiWithConfigStorage().post("/create/item",)
//                     .then((response)=>{
//                         console.log("Data -> ",response.data.msg);
//                     })
//                     .catch(()=>{
        
//                     })
//                   )  
//                 })
//                 .catch((error)=>{
//                     console.log("**Error**",error);
//                 }))
//             //
//             await
//             (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Account")
//                 .then((response)=>{
//                     console.log("**Hi**",response.data);
//                   await(
//                     requestAxios.getApiWithConfigStorage().post("/create/account",)
//                     .then((response)=>{
//                         console.log("Data -> ",response.data.msg);
//                     })
//                     .catch(()=>{
        
//                     })
//                   )  
//                 })
//                 .catch((error)=>{
//                     console.log("**Error**",error);
//                 }))      
//                 //
//                 await
//                 (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Customer")
//                     .then((response)=>{
//                         console.log("**Hi**",response.data);
//                       await(
//                         requestAxios.getApiWithConfigStorage().post("/create/customer",)
//                         .then((response)=>{
//                             console.log("Data -> ",response.data.msg);
//                         })
//                         .catch(()=>{
            
//                         })
//                       )  
//                     })
//                     .catch((error)=>{
//                         console.log("**Error**",error);
//                     }))
//                     //
//                 await
//                 (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Departement")
//                     .then((response)=>{
//                         console.log("**Hi**",response.data);
//                       await(
//                         requestAxios.getApiWithConfigStorage().post("/create/department",)
//                         .then((response)=>{
//                             console.log("Data -> ",response.data.msg);
//                         })
//                         .catch(()=>{
            
//                         })
//                       )  
//                     })
//                     .catch((error)=>{
//                         console.log("**Error**",error);
//                     }))
//                 //
//                 await
//                 (requestAxios.getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Employee")
//                     .then((response)=>{
//                         console.log("**Hi**",response.data);
//                       await(
//                         requestAxios.getApiWithConfigStorage().post("/create/employee",)
//                         .then((response)=>{
//                             console.log("Data -> ",response.data.msg);
//                         })
//                         .catch(()=>{
            
//                         })
//                       )  
//                     })
//                     .catch((error)=>{
//                         console.log("**Error**",error);
//                     }))
//             }
//         })
//         await promise;
//         console.log('end');
//         }, 1000);    
// }
// test()
// 50minutes pour le token
// 30minutes
// 