const express = require("express")
const router = express()
const cors = require("cors")
const bcrypt = require("bcrypt")
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
    Costumer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        address: req.body.address,
        phone: req.body.phone,
        bank: req.body.bank,
        RoleId: 3
    })
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
})

router.post('/api/login', (req, res) => {
    Costumer.findOne({
        where:{ email : req.body.email}
    }).then(user => {
        if(!user){
            return res.status(404).send({message: 'User not found!'})
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!"
            });
          }
        res.json(user) 
    })
})

module.exports = router