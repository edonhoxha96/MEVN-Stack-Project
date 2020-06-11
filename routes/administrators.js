const express = require("express")
const router = express()
const cors = require("cors")
const {Administrator} = require('../config/db')


router.use(cors())


router.get('/api/admins', (req, res) => {
    Administrator.findAll().then(admins => res.json(admins))
})

router.get('/api/admins/:id', (req, res) => {
    Administrator.findOne({
        where:{ id: req.params.id, },
    }).then(admins => res.json(admins))
})

router.post('/api/admins', (req, res) => {
    Administrator.create(req.body)
        .then(admins => res.json(admins))
})

module.exports = router