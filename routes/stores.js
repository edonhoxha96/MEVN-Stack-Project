const express = require("express")
const router = express()
const cors = require("cors")
const {Store} = require('../config/db')


router.use(cors())


router.get('/api/stores', (req, res) => {
    Store.findAll().then(stores => res.json(stores))
})

router.get('/api/stores/:id', (req, res) => {
    Store.findOne({
        where:{ id: req.params.id, },
    }).then(stores => res.json(stores))
})

router.post('/api/stores', (req, res) => {
    Store.create(req.body)
        .then(stores => res.json(stores))
})

module.exports = router