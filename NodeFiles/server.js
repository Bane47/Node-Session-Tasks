const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json())

app.get('/num',getMethod);
app.post('/num',postMethod);

app.listen(3000,()=>{
    console.log("Running");
});



const getMethod=(req,res)=>{
    const {num1,num2,action} = req.query;

    let result
    if(action==="add"){
         result=parseInt(num1)+parseInt(num2);
    }else if(action==="subtract"){
         result = parseInt(num1)+parseInt(num2);
    }
    app.json({result});
}
const postMethod=(req,res)=>{
    const {num1,num2,action} = req.body;

    let result
    if(action==="add"){
         result=parseInt(num1)+parseInt(num2);
    }else if(action==="subtract"){
         result = parseInt(num1)-parseInt(num2);
    }
    app.json({result});
}







app.listen(3000,console.log("Running"))

