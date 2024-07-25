const ProductModel = require('../models/productModel');

//this is for Get Products API 
//URL - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword? //this is for searching the products
        {name : { 
        $regex: req.query.keyword,
        $options: 'i'
    }} : {}

    const products = await ProductModel.find(query);
    res.json({
        success: true,
        products
    })
}

//this is for Get Single Product API 
//URL - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product'
        })
    }
}