import React, { Component } from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';
if(process.env.WEBPACK) require('./App.scss');

const Header = () => (
    <div className="header">
        <h1>Caxton test work</h1>
    </div>
);

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Content />
            </div>
        );
    }
}

export default App;
