var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login'); // renderiza views/login.ejs
});

module.exports = router;
