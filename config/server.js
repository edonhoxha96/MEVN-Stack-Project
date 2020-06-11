var express = require("express")
var cors = require("cors")
var bodyParser= require("body-parser")
var app = express()
const categories = require('../routes/categories')
const stores = require('../routes/stores')
const products = require('../routes/products')
const costumers = require('../routes/costumers')
const orders = require('../routes/orders')
const storekeepers = require('../routes/storekeepers')
const wishlists = require('../routes/wishlists')
const orderproducts = require('../routes/orderproducts')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/emall', [categories,stores,products,costumers,orders, storekeepers,wishlists,orderproducts])


var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Server is running on port' + port)
})