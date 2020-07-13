const express = require("express")
const router = express()
const cors = require("cors")
const bcrypt = require("bcrypt")
const {User} = require('../config/db')


router.use(cors())

router.get('/api/users', (req, res) => {
    User.findAll().then(admins => res.json(admins))
})

router.get('/api/users/:id', (req, res) => {
    User.findOne({
        where:{ id: req.params.id, },
    }).then(admins => res.json(admins))
})

router.post('/api/loginUser', (req, res) => {
    User.findOne({
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

router.post('/api/users', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        RoleId: req.body.RoleId,
        StoreId: req.body.StoreId
    })
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
})

module.exports = router