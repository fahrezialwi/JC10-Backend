import React, { Component } from 'react'
import axios from 'axios'

const URL_API = 'http://localhost:1912/'

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            passengers: []
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData = () => {
        axios.get(URL_API + 'passengers')
        .then(res => {
            this.setState({
                passengers : res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    passengerList = () => {
        return this.state.passengers.map((passenger, index) => {
            return (
                <tr key={index}>
                    <td>{passenger.PassengerId}</td>
                    <td>{passenger.Name}</td>
                    <td>{passenger.Sex === "male" ? "M" : "F"}</td>
                    <td>{passenger.Age}</td>
                    <td>{passenger.Pclass === 1 ? "First Class" : passenger.Pclass === 2 ? "Business" : "Economy"}</td>
                    <td>{passenger.Survived ? "Alive" : "Deceased"}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Survived</th>
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