var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { fstat } = require('fs');

const db = new sqlite3.Database('./dogwalks.db',(err) => {
    if(err){
        console.error('Failed', err);
    }else{
        console.log('Loaded');
    }
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api/dogs', async (req, res) => {
    try{

    }
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
