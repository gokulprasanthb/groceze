//lets add a things  for backend
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors')
const letsConnectDatabase = require('./config/connectDatabase');  //connecting database

//
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})
//

        //importing two routes from routes folder
const products = require('./routes/product');
const orders = require('./routes/order');

letsConnectDatabase();

                        
        //addinng prefixes before routes

app.use(express.json())      //this middleware is to return the data in a json formmat
app.use(cors())
app.use('/api/v1', products)
app.use('/api/v1', orders)


app.listen(process.env.PORT, ()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})