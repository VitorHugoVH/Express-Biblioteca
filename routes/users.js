var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You are so cool. Deu certo Joédio !');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Queria estar na praia, mas lembrei que moro na Gaivota.');
});

router.get('/ifc', function(req, res, next) {
  res.send('Welcome to IFC - A melhor instituição!');
});

module.exports = router;
