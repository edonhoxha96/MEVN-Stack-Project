const express = require("express")
const router = express()
const cors = require("cors")
const {Product} = require('../config/db')


router.use(cors())


router.get('/api/products', (req, res) => {
    Product.findAll().then(products => res.json(products))
})

router.get('/api/products/:id', (req, res) => {
    Product.findOne({
        where:{ id: req.params.id, },
    }).then(products => res.json(products))
})

router.post('/api/products/',(req, res) => {
    Product.create(req.body)
        .then(category => res.json(category))
} )

module.exports = router