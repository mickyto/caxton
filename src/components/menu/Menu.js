import React, { Component } from 'react';
if(process.env.WEBPACK) require('./Menu.scss');

class App extends Component {
    
    render() {
        return (
            <div className="menu">
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default App;