import React, { Component } from 'react';
import Departments from '../departments/Departments';
import Employees from '../employees/Employees';
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
                            <Employees data={this.props.data} />
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
