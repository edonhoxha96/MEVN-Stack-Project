const express = require("express")
const router = express()
const cors = require("cors")
const {Wishlist} = require('../config/db')


router.use(cors())


router.get('/api/wishlists', (req, res) => {
    Wishlist.findAll().then(wishlists => res.json(wishlists))
})

router.get('/api/wishlists/:id', (req, res) => {
    Wishlist.findAll({
        where:{ CostumerId: req.params.id, },
    }).then(wishlists => res.json(wishlists))
    .catch(err => console.log(err))
})

router.post('/api/wishlists', (req, res) => {
    Wishlist.create(req.body)
        .then(wishlists => res.json(wishlists))
})

module.exports = router