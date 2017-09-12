import React, { Component } from 'react';
if(process.env.WEBPACK) require('./App.scss');


class App extends Component {
  
  render() {
    return (
        <div>
          <h1 className="main">Hello World</h1>
        </div>
    );
  }
}

export default App;
