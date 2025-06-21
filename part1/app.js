var express = require('express');
var mysql = require('mysql2');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { fstat } = require('fs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'my_password',
    database: 'dogwalks',
});

app.get('/api/dogs', (req, res) => {
    const query = 'SELECT name, size, owner_id FROM Dogs';
    pool.query(query, (err,results) => {
        if(err){
            console.error('error fetching dogs:',err);
            res.status(500).send('Dogs: Server error');
        }else{
            res.json(results);
        }
    });
});

app.get('/api/walkrequests/open', (req, res) => {
    const query = 'SELECT request_id, dog_name, requested_time, duration_minutes, location, owner_id FROM WalkRequests';
    pool.query(query, (err,results) => {
        if(err){
            console.error('error fetching walkrequests:',err);
            res.status(500).send('Walkrequests: Server error');
        }else{
            res.json(results);
        }
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
