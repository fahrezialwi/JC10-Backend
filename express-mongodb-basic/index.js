let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let userRouter = require('./routers/userRouter')
const port = 2212

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to MongoDB API</h1>')
})

app.use(userRouter)

app.listen(port, console.log('Server up in port ' + port))