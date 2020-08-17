import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

class PersonList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          claims: []
          }
    }
  

  componentDidMount() {
    axios.get(`http://localhost:7000/claims`)
      .then(res => {
        const claims = res.data;
        this.setState({ claims });
      })
  }

  render() {
    return (
     /* <ul>
        { this.state.claims.map(claim => <li>{claim.EmployeeName}</li>)}
      </ul>*/
      <Table striped bordered hover>
         <thead>
          <tr>
            <th>Employee Name</th>
            <th>Claim Number</th>
            <th>Claim Type</th>
            <th>Claim Programs</th>
            <th>Claim Start date</th>
            <th>Claim End date</th>
            <th>Claim Program</th>
          </tr>
        </thead>
        <tbody>
        { this.state.claims.map(claim => <tr><td>{claim.EmployeeID}</td>
          <td>{claim.EmployeeName}</td>
          <td>{claim.ClaimNumber}}</td>
          <td>{claim.ClaimType}</td>
          <td>{claim.ClaimStartDate}</td>
          <td>{claim.ClaimEdDate}</td>
          <td>{claim.ClaimProgram}</td>
        </tr>)}
        </tbody>
      </Table>
    );
  }
}
export default PersonList;

/*
class PersonList extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {
            claims: []
          }
    }
  

  componentDidMount() {
    axios.get(`http://localhost:7000/claims`)
      .then(res => {
        const claims = res.data;
        this.setState({ claims });
        console.log("claims are "+claims);
      })
  }

  render() {
    return(
      <Table>
      <td>{claim.EmployeeName}</td>
      <td>{claim.ClaimNumber}</td>
      <td>{claim.ClaimType}</td>
      <td>{claim.ClaimStartDate}</td>
      <td>{claim.ClaimEdDate}</td>
      <td>{claims.ClaimProgram}</td>

    <th>Employee Name</th>
      <th>Claim Number</th>
      <th>Claim Type</th>
      <th>Claim Programs</th>
      <th>Claim Start date</th>
      <th>Claim End date</th>
      <th>Update</th>
      </Table>
    );
  }
}
export default PersonList;
*/