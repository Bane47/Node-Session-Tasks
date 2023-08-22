const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/external',(req,res)=>{
    res.send("<h1>This is rendered from the external file router.js</h1>");    //This is what that is getting rendered in the browser
    
}
);



module.exports=router;

