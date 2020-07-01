const express = require("express")
const router = express()
const cors = require("cors")
const bcrypt = require("bcrypt")
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

router.get('/api/currentAdmin', (req, res) => {
    Administrator.findOne({
        where:{ email : req.query.email}
    }).then(admin => {
        if(!admin){
            return res.status(404).send({ message: "User Not found." })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.query.password,
            admin.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!"
            });
          }
        res.json(admin) 
    })
})

router.post('/api/admins', (req, res) => {
    Administrator.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(admin => {
            res.json(admin)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
})

module.exports = router