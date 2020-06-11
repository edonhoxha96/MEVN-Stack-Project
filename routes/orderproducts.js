const express = require("express")
const router = express()
const cors = require("cors")
const {OrderProduct} = require('../config/db')


router.use(cors())


router.get('/api/orderproducts', (req, res) => {
    OrderProduct.findAll().then(orderproducts => res.json(orderproducts))
})

router.get('/api/orderproducts/:id', (req, res) => {
    OrderProduct.findOne({
        where:{ id: req.params.id, },
    }).then(orderproducts => res.json(orderproducts))
})

router.post('/api/orderproducts', (req, res) => {
    OrderProduct.create(req.body)
        .then(orderproducts => res.json(orderproducts))
})

module.exports = router