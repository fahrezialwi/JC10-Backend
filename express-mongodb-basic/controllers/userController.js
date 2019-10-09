let mongo = require('mongodb')
let mongoClient = require('mongodb').MongoClient
let url = require('../database')

const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

module.exports = {
    getUsers: (req, res) => {
        mongoClient.connect(url, config, (err, client) => {
            let collection = client.db('mongodb_exercise').collection('users')
            collection.find({}).toArray((err, result) => {
                if(err) throw err
                res.send(result)
            })
        })
    },

    getUserById: (req, res) => {
        mongoClient.connect(url, config, (err, client) => {
            let collection = client.db('mongodb_exercise').collection('users')
            collection.findOne({_id: mongo.ObjectID('5d9d6c9884123e0a04e32fe9')}, (err, result) => {
                if(err) throw err
                res.send(result)
            })
        })
    },

    addUser: (req, res) => {
        let data = {
            username: req.body.username,
            pwd: req.body.password
        }

        console.log(req.body)
        mongoClient.connect(url, config, (err, client) => {
            let collection = client.db('mongodb_exercise').collection('users')
            collection.insertOne(data, (err, result) => {
                if(err) throw err
                res.send(result)
            })
        })
    }
}