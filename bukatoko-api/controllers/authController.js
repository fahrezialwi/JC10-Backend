const db = require('../database')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'craveltrip@gmail.com',
        pass: 'psivmjsxlbsqifsh'
    }
})

module.exports = {
    login: (req, res) => {
        db.query(`select * from users where username = '${req.query.username}'`, (err, result) => {
            if (err) throw err
            if (result.length > 0){
                if(req.query.password === result[0].password){
                    res.send({
                        status: '200',
                        result: result [0]
                    })
                } else {
                    res.send({
                        status: '401',
                        message: 'Wrong password'
                    })
                }
            } else {
                let hasil = {
                    status: '404',
                    message: 'User not found'
                }
                res.send(hasil)
            }
        })
    },
    register: (req, res) => {
        let sql = `select * from users where username = '${req.body.username}'`
        let sql2 = `insert into users value (0, '${req.body.username}', '${req.body.email}', '${req.body.password}', 'free', 0)`

        db.query(sql, (err, result) => {
            if (err) throw err
            if(result.length > 0){
                res.send({
                    status: '400',
                    message: 'Username has been taken'
                })
            } else {
                db.query(sql2, (err2, result2) => {
                    if (err2) throw err2
                    res.send({
                        status: '201',
                        message: 'Your account has been created'
                    })
                })
            }
        })
    },
    sendVerifyMail: (req, res) => {
        let email = req.query.email
        let username = req.query.username
        let mailOptions = {
            from: 'Cravel Trip <craveltrip@gmail.com>',
            to: email,
            subject: 'Verify your account',
            html: `<p>Click this <a href='http://localhost:1010/auth/verify?username=${username}'>link</a> to verify your account</p>`
        }
        if (email){
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err
                res.send(`We have sent you a verification link to ${email}`)
            })
        } else {
            res.send('Email empty')
        }
    },
    verify: (req, res) => {
        let username = req.query.username
        let sql = `update users set verified = 1 where username = '${username}'`
    
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Your account has been verified')
        })
    }
}