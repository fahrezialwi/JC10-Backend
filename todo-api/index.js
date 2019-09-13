var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

const app = express()
const db =  require('./database/index')
const port = 8080

app.use(bodyParser.json())
app.use(cors())

// CRUD (Create, Read, Update, Delete)

// get root
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Todo API JC10</h1>`)
})

// get action data
app.get('/getlist', (req, res) => {
    db.query(`select * from todo`, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

// add action data
app.post('/addtodo', (req, res) => {
    db.query(`insert into todo values (0, '${req.body.action}', 0)`, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

// edit action data
app.put('/edittodo', (req, res) => {
    db.query(`update todo set action = '${req.body.action}' where id = ${req.body.id}`, (err, result) => {
        if (err) throw err
        res.send('Update success')
    })
})

// edit isCompleted data
app.put('/completeaction', (req, res) => {
    db.query(`update todo set isCompleted = 1 where id = ${req.body.id}`, (err, result) => {
        if (err) throw err
        res.send('Update success')
    })
})

// delete action data
app.delete('/deletetodo/:id', (req, res) => {
    var id = req.params.id
    db.query(`delete from todo where id = ${id}`, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.listen(port, console.log('Listening to port ' + port))