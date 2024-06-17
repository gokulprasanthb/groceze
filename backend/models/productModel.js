const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({ //SCHEMA - it will define the structure of collection
    name : String,
    price : String,
    description : String,
    ratings : String,
    images : [
        {
            image : String
        }
    ],
    category : String,
    seller : String,
    stock : String,
    numofreviews : String,
    createdAt : Date
})

const productModel = mongoose.model('product', productSchema) // creating a model

module.exports = productModel;