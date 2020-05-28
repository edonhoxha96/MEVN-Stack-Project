var express = require("express")
var cors = require("cors")
var bodyParser= require("body-parser")
var app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World!'))

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Server is running on port' + port)
})