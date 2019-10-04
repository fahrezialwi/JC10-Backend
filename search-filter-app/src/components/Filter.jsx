import React, { Component } from 'react'
import axios from 'axios'
import querystring from 'query-string'
const URL_API = 'http://localhost:1912/'

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            passengers: [],
            name: '',
            ageMin: '',
            ageMax: '',
            gender: '',
            class: '',
            survived: '',
            classes: []
        }
    }

    componentDidMount () {
        this.getData()
        this.getClassData()
    }

    getData = () => {
        let params = querystring.parse(this.props.location.search)

        axios.get(
            URL_API + 'passengers', {
                params: params
            }
        ).then(res => {
            this.setState({
                passengers: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    onFilterButton = () => {
        let params = {}
        if(this.state.name){
            params = {...params, name: this.state.name}
        }
        if(this.state.ageMin){
            params = {...params, age_min: this.state.ageMin}
        }
        if(this.state.ageMax){
            params = {...params, age_max: this.state.ageMax}
        }
        if(this.state.gender){
            params = {...params, gender: this.state.gender}
        }
        if(this.state.class){
            params = {...params, class: this.state.class}
        }
        if(this.state.survived){
            params = {...params, survived: this.state.survived}
        }

        this.props.history.push(`/filter?${querystring.stringify(params)}`)

        axios.get(
            URL_API + 'passengers', {
                params: params
            }
        ).then(res => {
            this.setState({
                passengers: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    passengerList = () => {
        return this.state.passengers.map((passenger, index) => {
            return (
                <tr key={index}>
                    <td>{passenger.PassengerId}</td>
                    <td>{passenger.Name}</td>
                    <td>{passenger.Age}</td>
                    <td>{passenger.Sex === "male" ? "Male" : "Female"}</td>
                    <td>{passenger.Pclass}</td>
                    <td>{passenger.Survived ? "Alive" : "Deceased"}</td>
                </tr>
            )
        })
    }

    getClassData = () => {
        axios.get(
            URL_API + 'classes'
        ).then(res => {
            this.setState({
                classes: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    classList = () => {
        return this.state.classes.map((val, index) => {
            return (
                <option key={index} value={val.Pclass}>{val.Pclass}</option>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-4">
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <h6>Name</h6>
                        <input ref="name" onChange={e => this.setState({name: e.target.value})} className="form-control"/>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <h6>Age</h6>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <input ref="ageMin" onChange={e => this.setState({ageMin: e.target.value})} className="form-control" placeholder="Min"/>
                            </div>
                            <div className="col-6 pl-1">  
                                <input ref="ageMax" onChange={e => this.setState({ageMax: e.target.value})} className="form-control" placeholder="Max"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <h6>Gender</h6>
                        <select onChange={e => this.setState({gender: e.target.value})} className="form-control">
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <h6>Class</h6>
                        <select onChange={e => this.setState({class: e.target.value})} className="form-control">
                            <option value="all">All</option>
                            {this.classList()}
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <h6>Survived</h6>
                        <select onChange={e => this.setState({survived: e.target.value})} className="form-control">
                            <option value="all">All</option>
                            <option value="1">Alive</option>
                            <option value="0">Deceased</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                        <button onClick={() => this.onFilterButton()} className="btn btn-primary btn-block" style={{marginTop: "27px"}}>Filter</button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="8%">ID</th>
                            <th width="52%">Name</th>
                            <th width="10%">Age</th>
                            <th width="10%">Gender</th>
                            <th width="10%">Class</th>
                            <th width="10%">Survived</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.passengerList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filter