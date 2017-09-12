import React, { Component } from 'react';
if(process.env.WEBPACK) require('./Menu.scss');

class App extends Component {

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="menu">
                {this.props.models.map(model => (
                    <h1 key={model} onClick={() => this.props.handleContent(model)}>{model}</h1>
                ))}
            </div>
        );
    }
}

export default App;