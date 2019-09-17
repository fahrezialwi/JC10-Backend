import React, { Component } from 'react'
import axios from 'axios'

const urlApi = 'http://localhost:8080/'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            inputTodo: '',
            selectedId: 0,
            editedAction: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(
            urlApi + 'getlist'
        ).then((res) => {
            this.setState({
                data: res.data
            })
        }).catch((err) => {
            console.log(err)
            alert('System Error')
        })
    }

    onFilterChange = (e) => {  
        if (e.target.value < 2){
            axios.get(
                urlApi + 'getlistcompleted',
                {
                    params: {
                        complete: e.target.value
                    }        
                }
            ).then((res) => {
                console.log(res.data)
                this.setState({
                    data: res.data
                })
            }).catch((err) => {
                alert('System Error')
            })
        } else {
            this.getData()
        }  
    }

    onAddButton = () => {
        axios.post(
            urlApi + 'addtodo',
            {
                action: this.state.inputTodo
            }
        ).then((res) => {
            this.getData()
        }).catch((err) => {
            console.log(err)
            alert('Cannot add to do')
        })
    }

    onEditConfirm = () => {
        axios.put(
            urlApi + 'edittodo/' ,
            {   
                id: this.state.selectedId,
                action: this.state.editedAction
            }
        ).then((res) => {
            this.getData()
            this.setState({selectedId: 0})
        }).catch((err) => {
            console.log(err)
            alert('Cannot delete to do')
        })
    }

    onEditCancel = () => {
        this.setState({selectedId: 0})
    }

    onEditButton = (id, action) => {
        this.setState({
            selectedId: id,
            editedAction : action,
        })
    }

    onDeleteButton = (id) => {
        axios.delete(
            urlApi + 'deletetodo/' + id,
        ).then((res) => {
            this.getData()
        }).catch((err) => {
            console.log(err)
            alert('Cannot delete to do')
        })
    }

    onCompleteClick = (id) => {
        axios.put(
            urlApi + 'completeaction/',
            {
                id: id
            }
        ).then((res) => {
            this.getData()
        }).catch((err) => {
            console.log(err)
            alert('Cannot complete task')
        })
    }

    completeButton = (id, isCompleted) => {
        if (isCompleted) {
            return (   
                <button disabled type="button" className="btn btn-dark">Complete task</button>   
            )
        } else {
            return (   
                <button onClick={() => {this.onCompleteClick(id)}} type="button" className="btn btn-success">Complete task</button>   
            )
        }
    }

    todoList = () => {
        let hasilRender =  this.state.data.map((val, index) => {
            if (val.id !== this.state.selectedId) {
                return (
                    <tr key={val.id}>
                        <td>{index+1}.</td>
                        <td>{val.action}</td>
                        <td>{val.is_completed ? 'Done' : 'Pending'}</td>
                        <td>
                            <button onClick={() => {this.onEditButton(val.id, val.action)}} type="button" className="btn btn-warning mr-2">Edit</button>
                            <button onClick={() => {this.onDeleteButton(val.id)}} type="button" className="btn btn-danger mr-2">Delete</button>
                            {this.completeButton(val.id, val.is_completed)}
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr key={val.id}>
                        <td>{index+1}.</td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.editedAction} 
                                onChange = {(e) => this.setState({editedAction: e.target.value})}
                            />
                        </td>
                        <td>{val.is_completed ? 'Done' : 'Pending'}</td>
                        <td>
                            <button onClick={() => {this.onEditConfirm()}} type="button" className="btn btn-warning mr-2">OK</button>
                            <button onClick={() => {this.onEditCancel()}} type="button" className="btn btn-danger mr-2">Cancel</button>
                            {this.completeButton(val.id, val.is_completed)}
                        </td>
                    </tr>
                )
            }
    
        })
        return hasilRender
    }

    render() {
        return (
            <div className="container">
                <div>
                    Filter
                    <select className="mt-5 ml-2 mb-3" onChange={(e) => {this.onFilterChange(e)}}>
                        <option value="2">All</option>
                        <option value="1">Done</option>
                        <option value="0">Pending</option>
                    </select>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>To do</td>
                            <td>Status</td>
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
                                <button onClick={this.onAddButton} type="button" className="btn btn-primary">Add to do</button>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default App
