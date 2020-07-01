const express = require("express")
const router = express()
const cors = require("cors")
const {Review} = require('../config/db')


router.use(cors())


router.get('/api/reviews', (req, res) => {
    Review.findAll().then(reviews => res.json(reviews))
})

router.get('/api/reviews/:id', (req, res) => {
    Review.findOne({
        where:{ id: req.params.id, },
    }).then(reviews => res.json(reviews))
})

router.post('/api/reviews', (req, res) => {
    Review.create(req.body)
        .then(reviews => res.json(reviews))
})

module.exports = router