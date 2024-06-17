const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');// auto imported

const router = express.Router(); //importing router
router.route('/products').get(getProducts) //sending responce for get method
router.route('/products/:id').get(getSingleProduct)

module.exports = router;