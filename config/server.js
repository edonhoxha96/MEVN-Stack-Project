var express = require("express")
var cors = require("cors")
var bodyParser= require("body-parser")
var app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

const {Administrator, Category, Costumer, Order, Product, Store, StoreKeeper} = require('./db')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/categories', (req, res) => {
    Category.findAll().then(categories => res.json(categories))
})

app.post('/api/categories', (req, res) => {
    Category.create(req.body)
        .then(categories => res.json(categories))
})

app.get('/api/products', (req, res) => {
    Product.findAll().then(products => res.json(products))
})

app.post('/api/products/',(req, res) => {
    Product.create(req.body)
        .then(category => res.json(category))
} )

app.get('/api/stores', (req, res) => {
    Store.findAll().then(stores => res.json(stores))
})

app.post('/api/stores', (req, res) => {
    Store.create(req.body)
        .then(stores => res.json(stores))
})

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Server is running on port' + port)
})