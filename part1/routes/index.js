var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

router.get('/', async function(req, res, next) {
  try{
    const response = await axios.get()
  }
});

module.exports = router;
