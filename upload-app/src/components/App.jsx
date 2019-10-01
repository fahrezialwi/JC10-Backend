import React, { Component } from 'react'
import axios from 'axios'

const URL_API = 'http://localhost:2020/'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedFile: null
        }
    }

    onSubmitFile = () => {
        let fd = new FormData()
        fd.append('browsefile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(
            URL_API + 'uploadimage', fd
        ).then(res => {
            alert('Upload file success')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="offset-2 col-4">
                        <input type="file" ref="fileBtn" className="d-none" onChange={e => this.setState({selectedFile: e.target.files[0]})}/>
                        <input type="button" onClick={() => {this.refs.fileBtn.click()}} value="Select a file" className="btn btn-block btn-primary"/>
                    </div>
                    <div className="col-4">
                        <input type="button" onClick={() => {this.onSubmitFile()}} value="Submit" className="btn btn-block btn-primary"/>   
                    </div>
                </div>
            </div>
        )
    }
}

export default App
