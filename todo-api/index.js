var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

const app = express()
const { getRoot, getList, addTodo, editTodo, completeAction, deleteTodo } = require('./controllers/todoControllers') 
const port = 8080

app.use(bodyParser.json())
app.use(cors())

// CRUD (Create, Read, Update, Delete)

// get root
app.get('/', getRoot)

// get action data
app.get('/getlist', getList)

// add action data
app.post('/addtodo', addTodo)

// edit action data
app.put('/edittodo', editTodo)

// edit isCompleted data
app.put('/completeaction', completeAction)

// delete action data
app.delete('/deletetodo/:id', deleteTodo)

app.listen(port, console.log('Listening to port ' + port))