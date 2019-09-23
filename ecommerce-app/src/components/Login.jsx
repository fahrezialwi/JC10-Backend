import React, { Component } from 'react'
import axios from 'axios'
const URL_API = 'http://localhost:1010/'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputUsername: '',
            inputPassword: ''
        }
    }

    onLoginClick = (e) => {
        e.preventDefault()
        axios.get(URL_API + 'auth/login', {
            params: {
                username: this.state.inputUsername,
                password: this.state.inputPassword
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onLoginClick} className="row">
                    <div className="col-5">
                        <input onChange={e => this.setState({inputUsername: e.target.value})} type="text" className="form-control mt-3" placeholder="Username"/>
                    </div>
                    <div className="col-5">
                        <input onChange={e => this.setState({inputPassword: e.target.value})} type="password" className="form-control mt-3" placeholder="Password"/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-block btn-primary mt-3" onClick={this.onLoginClick}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
