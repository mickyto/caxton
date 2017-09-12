import React, { Component } from 'react';
import Departments from '../departments/Departments';
if(process.env.WEBPACK) require('./Content.scss');

class App extends Component {
    
    render() {
        return (
            <div className="content">
                {this.props.data ?
                    <div>
                        {this.props.model == 'departments' &&
                            <Departments data={this.props.data} />
                        }
                        {this.props.model == 'employees' &&
                        <div>
                            {this.props.data.map(value => (
                                <h1 key={value.id}>{value.firstName}</h1>
                            ))}
                        </div>
                        }
                    </div>
                    :
                    <div>
                        <h2 className="greeting">Hello, world!</h2>
                    </div>
                }
            </div>
        );
    }
}

export default App;
