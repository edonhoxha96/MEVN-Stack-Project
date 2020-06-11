const express = require("express")
const router = express()
const cors = require("cors")
const {StoreKeeper} = require('../config/db')


router.use(cors())


router.get('/api/storekeepers', (req, res) => {
    StoreKeeper.findAll().then(storekeepers => res.json(storekeepers))
})

router.get('/api/storekeepers/:id', (req, res) => {
    StoreKeeper.findOne({
        where:{ id: req.params.id, },
    }).then(storekeepers => res.json(storekeepers))
})

router.post('/api/storekeepers', (req, res) => {
    StoreKeeper.create(req.body)
        .then(storekeepers => res.json(storekeepers))
})

module.exports = router