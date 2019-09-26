const db = require('../database')
const nodemailer = require('nodemailer')
var { pdfcreate } = require('../helpers/htmlPdf')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'craveltrip@gmail.com',
        pass: 'psivmjsxlbsqifsh'
    },
    tls: {
        rejectUnauthorized: false
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
        let sql = `select * from users where username = '${req.body.username}' or email = '${req.body.email}`
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
                    let mailOptions = {
                        from: 'Cravel Trip <craveltrip@gmail.com>',
                        to: email,
                        subject: 'Verify your account',
                        html: `<p>Click this <a href='http://localhost:1010/auth/verify?username=${username}'>link</a> to verify your account</p>`
                    }
                    
                    transporter.sendMail(mailOptions, (err3, info) => {
                        if (err3) throw err3
                    })

                    res.send({
                        status: '201',
                        message: 'Your account has been created'
                    })
                })
            }
        })
    },
    verify: (req, res) => {
        let sql = `update users set verified = 1 where username = '${req.query.username}' and email = '${req.query.email}'`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Your account has been verified')
        })
    },
    testEmail: (req, res) => {
        let options = {
            format: 'A4',
            orientation: 'portrait',
            border: {
                top: '0.5in',
                left: '0.15in',
                bottom: '0.15in',
                right: '0.25in',
            }
        }

        let date = new Date()

        let replacements = {
            username: req.query.username,
            date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        }

        pdfcreate('./pdf-templates/first-template.html', replacements, options, (stream) => {
            res.attachment('test.pdf')
            stream.pipe(res)
        })
    }
}