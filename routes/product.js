var express = require('express');
var router = express.Router();
var services = require('../controllers/product');
//this route is used to call product controller to update record in product collection
router.get('/list', function (req, res) {
  // console.log('list')
  services.show_user_products(req,res);
})
//this route is used to call product controller to update record in product collection
router.post('/register', function (req, res) {
services.create_product(req,res)
})
//this route is used to call product controller to update record in product collection
router.put('/:id', function (req, res) {
services.update_product(req,res);
})
//this route is used to call product controller to update record in product collection
router.delete('/:id', function (req, res) {
services.delete_product(req,res);
})


module.exports = router;