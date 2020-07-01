const express = require("express")
const router = express()
const cors = require("cors")
const {Category} = require('../config/db')
const { model } = require("mongoose")


router.use(cors())


router.get('/api/categories', (req, res) => {
    Category.findAll().then(categories => res.json(categories))
})

router.get('/api/categories/:id', (req, res) => {
    Category.findOne({
        where:{ id: req.params.id, },
    }).then(categories => res.json(categories))
})

router.post('/api/categories/post', (req, res) => {
    Category.create(req.body)
        .then(categories => res.json(categories))
})

// router.get('/api/categories/parents', (req, res) => {
//     Category.findAll(
//         {where:{
//             parentId: undefined
//         }}
//     ).then(categories => res.json(categories))
// })

module.exports = router