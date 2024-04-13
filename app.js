const port = 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");

const corsOption = {
    credences : true,
    origin : ['http://localhost:5000',"*"]
};


const asyncIntervals = [];

const runAsyncInterval = async (cb, interval, intervalIndex) => {
  await cb();
  if (asyncIntervals[intervalIndex]) {
    setTimeout(() => runAsyncInterval(cb, interval, intervalIndex), interval);
  }
};

const setAsyncInterval = (cb, interval) => {
  if (cb && typeof cb === "function") {
    const intervalIndex = asyncIntervals.length;
    asyncIntervals.push(true);
    runAsyncInterval(cb, interval, intervalIndex);
    return intervalIndex;
  } else {
    throw new Error('Callback must be a function');
  }
};

const clearAsyncInterval = (intervalIndex ) => {
  if (asyncIntervals[intervalIndex]) {
    asyncIntervals[intervalIndex] = false;
  }
}
app.use(cors(corsOption));
app.get("/",(req,res)=>{
    res.send("Hello");
   console.log("hiss ");
})
function getApiWithConfigAxios($token = ""){

  return  axios.create({
        baseURL               :/*"https://server.drapeauyamboka.com/api"*/`https://quickbooks.api.intuit.com/v3/company/9341452065431980`,
        headers   : {
          accept: 'application/json',
          "Content-type"      :   "application/json",
          "X-Requested-With"  :   "XMLHttpRequest",
          "Authorization"     :   `Bearer ${token}`       
        }
      })
}
function getApiWithConfigStorage(){

    return  axios.create({
          baseURL               :`https://unruffled-cloud-27010.pktriot.net/api/`,
          headers   : {
            accept: 'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer `       
          }
        })
  }

  function useAxiosRequestWithToken(){

    return  axios.create({
          baseURL               :`https://qkbfront.drapeauyamboka.com/api/`,
          headers   : {
            accept: 'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer `       
          }
        })
  }

app.listen(port,()=>{
    console.log("Server is run...")
    console.log("hiss ");
})

const test = async ()=>{
    setAsyncInterval(async () => {
        console.log('start');
        const promise = useAxiosRequestWithToken().get(`/backup/token`)
        .then(function (response) {
            const token = response.data.token 
            if(token != null){
                console.log("**************************")
                console.log("Token eye ->",token)
                // router.push("/")
                console.log("**************************")
                await
                (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Invoice")
                    .then((response)=>{
                        console.log("**Hi**",response.data);
                    await(
                        getApiWithConfigStorage().post("/create/invoice",)
                        .then((response)=>{
                            console.log("Data -> ",response.data.msg);
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                    )  
                    })
                    .catch((error)=>{
                        console.log("**Error**",error);
                    }))
        //
                await
                (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Vendor")
                    .then((response)=>{
                        console.log("**Hi**",response.data);
                    await(
                        getApiWithConfigStorage().post("/create/vendor",)
                        .then((response)=>{
                            console.log("Data -> ",response.data.msg);
                        })
                        .catch(()=>{
            
                        })
                    )  
                    })
                    .catch((error)=>{
                        console.log("**Error**",error);
                    })) 
            //
            await
            (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Item")
                .then((response)=>{
                    console.log("**Hi**",response.data);
                  await(
                    getApiWithConfigStorage().post("/create/item",)
                    .then((response)=>{
                        console.log("Data -> ",response.data.msg);
                    })
                    .catch(()=>{
        
                    })
                  )  
                })
                .catch((error)=>{
                    console.log("**Error**",error);
                }))
            //
            await
            (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Account")
                .then((response)=>{
                    console.log("**Hi**",response.data);
                  await(
                    getApiWithConfigStorage().post("/create/account",)
                    .then((response)=>{
                        console.log("Data -> ",response.data.msg);
                    })
                    .catch(()=>{
        
                    })
                  )  
                })
                .catch((error)=>{
                    console.log("**Error**",error);
                }))      
                //
                await
                (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Customer")
                    .then((response)=>{
                        console.log("**Hi**",response.data);
                      await(
                        getApiWithConfigStorage().post("/create/customer",)
                        .then((response)=>{
                            console.log("Data -> ",response.data.msg);
                        })
                        .catch(()=>{
            
                        })
                      )  
                    })
                    .catch((error)=>{
                        console.log("**Error**",error);
                    }))
                    //
                await
                (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Departement")
                    .then((response)=>{
                        console.log("**Hi**",response.data);
                      await(
                        getApiWithConfigStorage().post("/create/department",)
                        .then((response)=>{
                            console.log("Data -> ",response.data.msg);
                        })
                        .catch(()=>{
            
                        })
                      )  
                    })
                    .catch((error)=>{
                        console.log("**Error**",error);
                    }))
                //
                await
                (getApiWithConfigAxios(token).get("/query?query=SELECT%20*%20FROM%20Employee")
                    .then((response)=>{
                        console.log("**Hi**",response.data);
                      await(
                        getApiWithConfigStorage().post("/create/employee",)
                        .then((response)=>{
                            console.log("Data -> ",response.data.msg);
                        })
                        .catch(()=>{
            
                        })
                      )  
                    })
                    .catch((error)=>{
                        console.log("**Error**",error);
                    }))
            }
        })
        await promise;
        console.log('end');
        }, 1000);
    

}
test()