const express = require('express');


const app = express();


app.get('/',(req,res)=>{
    res.json({response:"Hello World!!!",status:200});
});

app.listen(3000,()=>{
    console.log("Successfull");
})


