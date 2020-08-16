import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.jsx';
import Employee from './MycomponentTwo.jsx';
import MyStatecomponent from './MyStatecomponent.jsx';
import Login from './login.jsx';
import Header from './Headercomponent.jsx';
import ClaimUpdate from './ClaimUpdateComponent.jsx';

let emp = {
    name: 'Maha',
    city: 'Bangalore'
}

//ReactDOM.render(<Hello name="Mahalakshmi" age='20'/>, document.getElementById('login'));
//ReactDOM.render(<Employee emp={emp}/>, document.getElementById('details'));
//ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
//ReactDOM.render(<ClaimList />, document.getElementById('claimList'));
//ReactDOM.render(<MyForm />, document.getElementById('formex')); 
ReactDOM.render(<ClaimUpdate/>, document.getElementById('claim'));
//ReactDOM.render(<MyStatecomponent/>, document.getElementById('state'));
//ReactDOM.render(<Login/>, document.getElementById('login'));
//ReactDOM.render(<Header/>, document.getElementById('header'));