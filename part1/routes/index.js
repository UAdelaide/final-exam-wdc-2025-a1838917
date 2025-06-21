var express = require('express');
var router = express.Router();
require('dotenv').config();

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

router.get('/', async function(req, res, next) {
  try{
    const response = await fetch(DOG_API);
    const data = await response.json()

    res.render('index',{
      imageUrl: response.data.url,
    });
  }
  catch(error){
    console.error('Error: could not fetch dog photo', error.messege);
  }
});

module.exports = router;
