const express = require("express")
const router = express()
const cors = require("cors")
const {Costumer} = require('../config/db')


router.use(cors())


router.get('/api/costumers', (req, res) => {
    Costumer.findAll().then(costumers => res.json(costumers))
})

router.get('/api/costumers/:id', (req, res) => {
    Costumer.findOne({
        where:{ id: req.params.id, },
    }).then(costumers => res.json(costumers))
})

router.post('/api/costumers', (req, res) => {
    Costumer.create(req.body)
        .then(costumers => res.json(costumers))
})

module.exports = router