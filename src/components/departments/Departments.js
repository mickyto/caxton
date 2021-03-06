import React, { Component } from 'react';
import axios from 'axios';

if(process.env.WEBPACK) require('./Departments.scss');

class Departments extends Component {

    constructor(props) {
        super(props);

        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            departments: props.data
        };
    }


    handleSubmit(i, e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/departments/${i+1}`, this.state.departments[i])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleInputs(i, e) {

        const departments = this.state.departments;
        departments[i].name = e.target.value;

        this.setState({
            departments
        })
    }

    render() {
        console.log(this.state.departments)
        return (
            <div className="form">
                {this.state.departments.map((value, i) => (
                    <form key={i} onSubmit={(e) => this.handleSubmit(i, e)}>
                        <input onChange={(e) => this.handleInputs(i, e)} value={value.name} />
                        <button>Save</button>
                    </form>
                ))}
            </div>
        )
    }
};

export default Departments;




