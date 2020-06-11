const express = require("express")
const router = express()
const cors = require("cors")
const {Order} = require('../config/db')


router.use(cors())


router.get('/api/orders', (req, res) => {
    Order.findAll().then(orders => res.json(orders))
})

router.get('/api/orders/:id', (req, res) => {
    Order.findOne({
        where:{ id: req.params.id, },
    }).then(orders => res.json(orders))
})

router.post('/api/orders', (req, res) => {
    Order.create(req.body)
        .then(orders => res.json(orders))
})

module.exports = router