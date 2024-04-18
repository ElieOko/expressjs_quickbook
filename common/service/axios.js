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


  module.exports ={
    getApiWithConfigAxios,
    getApiWithConfigStorage,
    useAxiosRequestWithToken
  }
  
