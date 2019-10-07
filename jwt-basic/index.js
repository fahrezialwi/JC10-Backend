let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let jwt = require('jsonwebtoken')
const port =  7519
const appKey = 'secretkey'

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the JWT-secured API</h1>`)
})

// buat (encode) token
app.post('/token', (req, res) => {
    let {username, email} = req.body
    let token = jwt.sign({username, email}, appKey, {expiresIn: '12h'})
    res.send({
        username,
        email,
        token
    })
})

// decode token
const auth = (req, res, next) => {
    if(req.method !== "OPTIONS"){
        console.log(req.headers.authorization)
        jwt.verify(req.headers.authorization, appKey, (error, decoded) => {
            if(error){
                // success = false
                return res.status(401).json({message: "User not authorized", error: "User not authorized"})
            }
            console.log({decoded})
            req.user = decoded
            next() // lanjut ke parameter router selanjutnya
        })
    } else {
        next() // lanjut ke parameter router selanjutnya
    }
}

// menggunakan token pada router
app.get('/verifytoken', auth, (req, res) => {
    res.send('User authorized')
})

app.listen(port, console.log('Server up in port ' + port))