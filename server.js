// Load environment variables from .env file
const dotenvResult = require('dotenv').config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const externalfile = require('./Playground/routes/routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(externalfile);

// Render the login page
app.get('/renderHtml', (req, res) => {
    res.render('login');
});

// Handle login form submission
app.post('/dashboard', (req, res) => {
    const username = req.body.username;
    // This will render the dashboard template
    res.render('dashboard');
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
