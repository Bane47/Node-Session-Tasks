const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

// Adding a middleware
const middleware = function (req, res, next) {
  console.log("Welcome to the calculator--[This is a middleware]");

  const { a, b } = req.query; // Extract a and b from the query parameters

  if(!a||!b){
    return res.status(500).json({
      status:500,
      error:"Please enter all fields"
    })
  }
  if (isNaN(a) || isNaN(b)) {
    return res.status(422).json({
      status: 422,
      error: "Wrong datatypes are passed in the query, Please"
    });
  }
  next(); // This will allow the data flow further
}

app.use(middleware);

app.get('/num', getMethod);
app.post('/num', postMethod);

function getMethod(req, res) {
  const { a, b, action } = req.query;

  let result;
  if (action === 'add') {
    result = parseInt(a) + parseInt(b);
  } else if (action === 'subtract') {
    result = parseInt(a) - parseInt(b);
  }

  res.json({ result });
}

function postMethod(req, res) {
  const { a, b, action } = req.body;

  let result;
  if (action === 'add') {
    result = a + b;
  } else if (action === 'subtract') {
    result = a - b;
  }

  res.json({ result });
}

app.listen(3000, () => {
  console.log('running');
});
