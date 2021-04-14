const express = require('express');

// we don't need to install it because its a core module
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('connected to database');
});
mongoose.connection.on('error', (err) => {
    console.log(`database error ${err}`);
});


// intialize app variable
const app = express();

const users = require('./routes/users');

const port = process.env.port || 3000;

app.use(cors());

// set static folder file
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
   res.send('invalid end point');
});

// Start server
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});