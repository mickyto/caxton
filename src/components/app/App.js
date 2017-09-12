import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../menu/Menu';
import Content from '../content/Content';
if(process.env.WEBPACK) require('./App.scss');

const Header = () => (
    <div className="header">
        <h1>Caxton test work</h1>
    </div>
);

class App extends Component {

    constructor(props) {
        super(props);

        this.handleContent = this.handleContent.bind(this);

        this.state = {
            models: '',
            activeModel: ''
        };
    }

    componentWillMount() {
        const This = this;
        axios.get('http://localhost:3001/db')
            .then(function (response) {
                This.setState({
                    models: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleContent(model) {
        this.setState({
            activeModel: model
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Menu models={Object.keys(this.state.models)} handleContent={this.handleContent} />
                <Content data={this.state.models[this.state.activeModel]} model={this.state.activeModel} />
            </div>
        );
    }
}

export default App;
