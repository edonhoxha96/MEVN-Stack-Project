const express = require("express")
const router = express()
const cors = require("cors")
const {Role} = require('../config/db')


router.use(cors())


router.get('/api/roles', (req, res) => {
    Role.findAll().then(roles => res.json(roles))
})

router.get('/api/roles/:id', (req, res) => {
    Role.findOne({
        where:{ id: req.params.id, },
    }).then(role => res.json(role))
})

module.exports = router