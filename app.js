const port = 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");

const corsOption = {
    credences : true,
    origin : ['http://localhost:5000',"*"]
};


app.use(cors(corsOption));
app.get("/",(req,res)=>{
    res.send("Hello");
   console.log("hiss ");
})
function getApiWithConfigAxios(){
  return  axios.create({
        baseURL               :/*"https://server.drapeauyamboka.com/api"*/`https://quickbooks.api.intuit.com/v3/company/9341452065431980`,
        headers   : {
          accept: 'application/json',
          "Content-type"      :   "application/json",
          "X-Requested-With"  :   "XMLHttpRequest",
          "Authorization"     :   `Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..vPnHMwachsHBBv8ZsLauHw.FRBQ6sbWEO6hLpCnToOtY_7BHnUfijqygpzKN9PrIVeqA5vByey7gOTIy0JJaUzpV4M_iLK4CdBNLqJMY7BsU6G-_4FBDy8ctq4rjk_COdB_HylKi_QRHcHQY675IerYHtox5ITBEW-XQj0KDwawKKFw55gApaYONZHQAEbN0MJ5Js3cO9hmVT9tMLzFSEIMbyirMLS3z_Jap_WR02Ie_fwoLfT6I8kfaszPKOw0gTWV7uXb-OOQqyknoOxestCtQeZTE8aXEQm_Y0XAk2MdVfLuwWVXG-wu-m5tJrvImAwsSRFhdhdfSLFd7EzFi40-uDfD4NKRwNN9dp9OzstNeh9cb9xPST34hTf2jawETU-Bts93rDLWR1O0Si_VLC76q5b17cAXLyByXNKY1en6spYoFKHS6N2wAR0PB1kbybLYgRW9D3OolWA6oBN1ic29cxEzHMLbwbI3PNqlgFstEuR-Wt0f1HO1BcuNR4uFL1lkOKO-eA4BYdDmuZt9sh5myA6ElCLNUYiu7C2wMUdOO4v_k5jIYJytvXlIaQycW0Ag4jV8MZERcc72lXZLgSVoU3CWyDXHUwjzX7g3EGAYEA4g5DBZiDrj4pm_BKqG6IcywnJ4paD5-R7URXF8MvmrVaI1BcHYiq16dH3v1wwBP-R_dzD1GlK1-qZitYWe8gy6xOn6zdZkq2owq8p8-zlB1qyuvqUhv81DHCMLN2rjYIo2Z2yhR5XIRK760rSAyUmfzVPvvl93p0kDiIxX4ZFD.Ule2woAnhQaZdOQchyz9Fg`       
        }
      })
}

app.listen(port,()=>{
    console.log("Server is run...")
    console.log("hiss ");
})

const test = async ()=>{
    await
    getApiWithConfigAxios().get("/query?query=SELECT%20*%20FROM%20Invoice")
        .then((response)=>{
            console.log("**Hi**",response.data);
        })
        .catch((error)=>{
            console.log("**Error**",error);
        })
        .finally(()=>{

        })
}
test()