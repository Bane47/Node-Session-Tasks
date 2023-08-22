const bodyParser = require('body-parser');
const express = require('express');


const app = express();
app.use(bodyParser.json());

//adding a middleware
const middleware = function(req,res,next){

console.log("Welcome to the calculator--[This is a middleware]");
next();   //This will allow the data flow further

}

app.use(middleware); //middlewares are used by the use(); and also this will work before the get() and post()

app.get('/num', getMethod);
app.post('/num', postMethod);



function getMethod(req, res) {
  const { a, b, action } = req.query;


  let result;
  if (action === 'add') {
    result = parseInt(a) + parseInt(b);
  } else if(action==='subtract') {
    result = a - b;
  }

  res.json({ result });
}

function postMethod(req, res) {
  const { a, b, action } = req.body;

  let result;
  if (action === 'add') {
    result = a + b;
  } else if(action==='subtract') {
    result = a - b;
  }

  res.json({ result });
}

app.listen(3000, () => {
  console.log('runnin')
});