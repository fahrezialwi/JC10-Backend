const db = require('../database')

module.exports = {
    getRoot: (req, res) => {
        res.send(`<h1>Welcome to Todo API JC10</h1>`)
    },
    
    getList: (req, res) => {
        db.query(`select * from todo`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getListByCompleted: (req, res) => {
        db.query(`select * from todo where is_completed = '${req.query.complete}'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    addTodo: (req, res) => {
        db.query(`insert into todo values (0, '${req.body.action}', 0)`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    editTodo: (req, res) => {
        db.query(`update todo set action = '${req.body.action}' where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Update success')
        })
    },

    completeAction: (req, res) => {
        db.query(`update todo set is_completed = 1 where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Update success')
        })
    },

    deleteTodo: (req, res) => {
        var id = req.params.id
        db.query(`delete from todo where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getUsersByRole: (req, res) => {
        db.query(`select * from users where role = '${req.query.role}'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getTodoJoinUsers: (req, res) => {
        db.query(`select * from todo t
        join users u on t.userId = u.id
        where u.username = 'seto'`, (err,result) => {
            let data = {
                username: result[0].username,
                todo: []
            }
            
            result.forEach(val => {
                data.todo.push(val.action)
            })

            res.send(data)
        })
    },

    getUserByUsername: (req, res) => {
        db.query(`select * from users where username = '${req.query.username}'`, (err, result) => {
            if (err) throw err
            res.send(result[0])
        })
    }
}