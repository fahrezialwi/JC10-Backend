var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

const app = express()
const { getRoot, getList, getListByCompleted, addTodo, editTodo, completeAction, deleteTodo } = require('./controllers/todoControllers') 
const port = 8080

app.use(bodyParser.json())
app.use(cors())

// CRUD (Create, Read, Update, Delete)

// get root
app.get('/', getRoot)

// get action data
// ketika di axios meng-get pakai params, maka params-nya menjadi req.query
app.get('/getlist', getList)

// get completed action data
app.get('/getlistcompleted', getListByCompleted)

// add action data
app.post('/addtodo', addTodo)

// edit action data
app.put('/edittodo', editTodo)

// edit isCompleted data
app.put('/completeaction', completeAction)

// delete action data
// :id -> menjadi req.params
app.delete('/deletetodo/:id', deleteTodo)

app.listen(port, console.log('Listening to port ' + port))