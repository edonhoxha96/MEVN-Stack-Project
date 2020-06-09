const express = require('express')
const router = express.Router()
const cors = require("cors")
const sequelize = require('sequelize')

const models = require("../../config/db.js")

router.get('/categories', function(req, res){
    Category.findAll().then(categories => res.json(categories));
})