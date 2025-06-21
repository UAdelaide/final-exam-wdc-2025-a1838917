var express = require('express');
var router = express.Router();

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
