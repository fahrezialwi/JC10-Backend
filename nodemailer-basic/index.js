var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var mysql = require('mysql')

const port = 1337
const db = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'auth_test',
    host: 'localhost'
})
const nodemailer = require('nodemailer')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Nodemailer API</h1>')
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'craveltrip@gmail.com',
        pass: 'psivmjsxlbsqifsh'
    }
})

app.get('/sendmail', (req, res) => {
    let to = req.query.email
    let mailOptions = {
        from: 'Cravel Trip <craveltrip@gmail.com>',
        to,
        subject: 'Testing Nodemailer',
        html: '<h1>Success</h1>'
    }
    if (to){
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err
            res.send('Email sent')
        })
    } else {
        res.send('Email empty')
    }
})

app.get('/sendverifymail', (req, res) => {
    let to = req.query.email
    let username = req.query.username
    let mailOptions = {
        from: 'Cravel Trip <craveltrip@gmail.com>',
        to,
        subject: 'Verify your account',
        html: `<p>Click this <a href='http://localhost:1337/verify?username=${username}'>link</a> to verify your account</p>`
    }
    if (to){
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err
            res.send('Email sent')
        })
    } else {
        res.send('Email empty')
    }
})

app.get('/verify', (req, res) => {
    let username = req.query.username
    let sql = `update users set verified = 1 where username = '${username}'`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('Your account has been verified')
    })
})

app.listen(port, console.log('Listening in port ' + port))