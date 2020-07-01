const express = require("express")
const router = express()
const cors = require("cors")
const bcrypt = require("bcrypt")
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

router.get('/api/currentStoreKeeper', (req, res) => {
    StoreKeeper.findOne({
        where:{ email : req.query.email}
    }).then(storekeeper => {
        if(!storekeeper){
            return res.status(404).send({ message: "User Not found." })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.query.password,
            storekeeper.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!"
            });
          }
        res.json(storekeeper) 
    })
})

router.post('/api/storekeepers', (req, res) => {
    StoreKeeper.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        StoreId: req.body.StoreId
    })
        .then(admin => {
            res.json(admin)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
})

module.exports = router