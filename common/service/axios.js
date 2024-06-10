const { default: axios } = require("axios");

function useAxiosRequestWithToken(){
    return  axios.create({
          baseURL               :`https://elie.excursio.africa/api/`,
          headers   : {
            accept: 'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer `       
          }
        })
  }

  function getApiWithConfigStorage(){
    return  axios.create({
          baseURL               :`https://elie.excursio.africa/api/`,
          headers   : {
            accept: 'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer `       
          }
        })
  }

  function getApiWithConfigAxios(token = ""){

    return  axios.create({
          baseURL               :/*"https://server.drapeauyamboka.com/api"*/`https://quickbooks.api.intuit.com/v3/company/9341452052352524`,
          headers   : {
            accept: 'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer ${token}`       
          }
        })
  }

  async function postData(route = "", data = {},token = "") {
    // Default options are marked with *
    try {
        const response = await fetch(`https://quickbooks.api.intuit.com/v3/company/9341452052352524${route}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`  
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
         });
        return response.json();
    } catch (error) {
      return error;
    }
    





    
     // parses JSON response into native JavaScript objects
  }
  module.exports ={
    postData,
    getApiWithConfigAxios,
    getApiWithConfigStorage,
    useAxiosRequestWithToken
  }
  
