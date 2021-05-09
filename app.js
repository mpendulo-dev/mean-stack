const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;

const users = require('./routes/users');
// intialize app variable
const app = express();


mongoose.connect('mongodb://localhost/meanapp', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('connected to database');
});
mongoose.connection.on('error', (err) => {
    console.log(`database error ${err}`);
});


app.use(cors());

// body parser middleware
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

// passwpoirt middleware 
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
   res.send('invalid end point');
});

// Start server
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});