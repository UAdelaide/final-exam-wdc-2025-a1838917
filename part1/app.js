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

const DWdata = mysql.createPool({
    host: 'local',
    user: 'mysql_user',
    password: 'mysql_pass',
    database: 'dogwalks',
});

app.get('/api/dogs', async (req, res) => {
    const query = 'SELECT name, size, owner_id FROM Dogs';
    DWdata.query(query, (err,results) =>{
        if(err){
            console.error('error fetching dogs:',err);
        }
    })
    try{

    }
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
