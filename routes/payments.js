const express = require("express")
const router = express()
const cors = require("cors")
const {Payment} = require('../config/db')


router.use(cors())


router.get('/api/payments', (req, res) => {
    Payment.findAll().then(payments => res.json(payments))
})

router.get('/api/payments/:id', (req, res) => {
    Payment.findOne({
        where:{ id: req.params.id, },
    }).then(payments => res.json(payments))
})

router.post('/api/payments', (req, res) => {
    Payment.create(req.body)
        .then(payments => res.json(payments))
})

module.exports = router