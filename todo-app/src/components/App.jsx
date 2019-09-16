import React, { Component } from 'react'
import axios from 'axios'

const urlApi = 'http://localhost:8080/'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            inputTodo: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(
            urlApi + 'getList'
        ).then((res) => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        }).catch((err) => {
            console.log(err)
            alert('System Error')
        })
    }

    onAddButton = () => {
        axios.post(
            urlApi + 'addtodo',
            {
                action: this.state.inputTodo
            }
        ).then((res) => {
            this.getData()
            console.log(res)
        }).catch((err) => {
            console.log(err)
            alert('Cannot add to do')
        })
    }

    onDeleteButton = (id) => {
        axios.delete(
            urlApi + 'deletetodo/' + id,
        ).then((res) => {
            this.getData()
            console.log(res)
        }).catch((err) => {
            console.log(err)
            alert('Cannot delete to do')
        })
    }

    todoList = () => {
        return this.state.data.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}.</td>
                    <td>{val.action}</td>
                    <td><input onClick={() => {this.onDeleteButton(val.id)}} type="button" className="btn btn-danger" value="Delete"/></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Nomor</td>
                            <td>To do</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>
                                <input onChange={e => this.setState({inputTodo: e.target.value})} className="form-control" type="text"/>
                            </td>
                            <td>
                                <input onClick={this.onButtonDelete} type="button" className="btn btn-primary" value="Add to do"/>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default App
