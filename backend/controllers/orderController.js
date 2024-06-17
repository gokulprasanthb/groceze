const orderModel = require('../models/orderModel')

        //this is for CREATE ORDER 
        //URL - /api/v1/order
exports.createOrder = async(req, res, next) => {
    // console.log(req.body, 'data')
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((accumulatorValue, item) => (accumulatorValue + item.product.price * item.qty), 0 )).toFixed(2);//accumulatorValue will helps to store the previous values -- //NUMBER.TOFIXED is used to control the decimal
    const status = 'pending'

                //lets create an ORDERMODEL
    const order = await orderModel.create({cartItems, amount, status})

    res.json({
        success : true,
        order
    })
}