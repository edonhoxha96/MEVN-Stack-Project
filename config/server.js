var express = require("express")
var cors = require("cors")
var bodyParser= require("body-parser")
var app = express()
const categories = require('../routes/categories')
const stores = require('../routes/stores')
const products = require('../routes/products')
const costumers = require('../routes/costumers')
const orders = require('../routes/orders')
const wishlists = require('../routes/wishlists')
const orderproducts = require('../routes/orderproducts')
const reviews = require('../routes/reviews')
const payments = require('../routes/payments')
const roles = require('../routes/roles')
const users = require('../routes/users')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/emall', [categories,stores,products,costumers,orders ,wishlists,orderproducts,reviews,payments,users,roles])


var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Server is running on port' + port)
})