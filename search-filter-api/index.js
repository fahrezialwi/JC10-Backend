var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const db = require('./database/index')
const port = 1912

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Titanic API</h1>`)
})

app.get('/passengers', (req, res) => {
    db.query(`select * from train`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

app.listen(port, () => console.log('Server up in port ' + port))