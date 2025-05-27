var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('aguaviva'); // renderiza views/aguaviva.ejs
});

module.exports = router;