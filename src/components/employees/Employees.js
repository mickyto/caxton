import React, { Component } from 'react';
import axios from 'axios';

if(process.env.WEBPACK) require('../departments/Departments.scss');

class Employees extends Component {

    constructor(props) {
        super(props);

        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            employees: props.data
        };
    }


    handleSubmit(i, e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/employees/${i+1}`, this.state.employees[i])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleInputs(i, e, field) {

        const employees = this.state.employees;
        employees[i][field] = e.target.value;

        this.setState({
            employees
        })
    }

    render() {
        console.log(this.state.employees)
        return (
            <div className="form">
                {this.state.employees.map((value, i) => (
                    <form key={i} onSubmit={(e) => this.handleSubmit(i, e)}>
                        <input onChange={(e) => this.handleInputs(i, e, 'firstName')} value={value.firstName} />
                        <input onChange={(e) => this.handleInputs(i, e, 'lastName')} value={value.lastName} />
                        <input className="id" onChange={(e) => this.handleInputs(i, e, 'departmentId')} value={value.departmentId} />
                        <button>Save</button>
                    </form>
                ))}
            </div>
        )
    }
};

export default Employees;

