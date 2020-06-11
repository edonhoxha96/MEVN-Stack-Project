const express = require("express")
const router = express()
const cors = require("cors")
const {Wishlist} = require('../config/db')


router.use(cors())


router.get('/api/wishlists', (req, res) => {
    Wishlist.findAll().then(wishlists => res.json(wishlists))
})

router.get('/api/wishlists/:id', (req, res) => {
    Wishlist.findOne({
        where:{ id: req.params.id, },
    }).then(wishlists => res.json(wishlists))
})

router.post('/api/wishlists', (req, res) => {
    Wishlist.create(req.body)
        .then(wishlists => res.json(wishlists))
})

module.exports = router