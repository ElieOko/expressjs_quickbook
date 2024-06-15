const fs = require("fs");

const writerTemp = (pathFIle,data) =>{
    fs.writeFile(pathFIle,data,(err)=>{
        if (err) throw err;
        console.log('**********************Saved!********************');
    });
}

const readerTemp = (pathFIle)=>{
    const customPromise = new Promise((resolve, reject) => {
        fs.readFile(pathFIle,'utf8',(err,data)=>{
            if (err) throw reject(err);
            resolve(data) 
        })
    })
   return customPromise
    // return sideEffectValue
}

module.exports ={
    readerTemp,
    writerTemp
}