import React, { Component } from 'react';
if(process.env.WEBPACK) require('./Content.scss');

class App extends Component {
    
    render() {
        return (
            <div className="content">
                <h1>Content</h1>
            </div>
        );
    }
}

export default App;
