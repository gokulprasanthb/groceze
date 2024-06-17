const express = require('express');
const { createOrder } = require('../controllers/orderController');//auto imported

const router = express.Router(); //importing router
router.route('/order').post(createOrder)

module.exports = router;