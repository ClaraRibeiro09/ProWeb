var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('meusLivros'); // renderiza views/meusLivros.ejs
});

module.exports = router;
