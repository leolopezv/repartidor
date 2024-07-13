var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET fotos page with external service. */
router.get('/photos', async function(req, res, next) {
  const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json'
  const axios = require('axios');
  const response = await axios.get(URL);
  res.render('fotos', { title: 'Fotos', fotos: response.data });
});

module.exports = router;
