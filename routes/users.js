var express = require('express');
var router = express.Router();
var user = require('../controllers/user');
var login = require('../controllers/login');
/* GET users listing. */
router.post('/login', function(req, res, next) {
  login.login(req,res)
});

router.post('/register', function(req, res, next) {
  user.register(req,res)
});

router.get('/list', function(req, res, next) {
  user.get_user(req,res)
  
});

router.put('/:id', function(req, res, next) {
  user.update_user(req,res)
});

router.delete('/:id', function(req, res, next) {
  user.delete_user(req,res)
});

module.exports = router;