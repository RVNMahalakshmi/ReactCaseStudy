import React from 'react';
import EmployeeName from './MycomponentOne.jsx';

class Employee extends React.Component{
    render(){

        return(
            <div>EmplyeeCity : {this.props.emp.city}
                <EmployeeName ename={this.props.emp.name} />
            </div>
        );
    }
}

export default Employee;
