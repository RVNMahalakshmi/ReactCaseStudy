import React from 'react'
import { FormGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class ClaimUpdate extends React.Component{
    render(){

        return(

            <div class="form-wrap">
            
                    <Form.Group>
                        <Form.Control type="text"  id="empID" placeholder="Employee ID"/>
                        <br/>
                        <Form.Control type="text" id="empName" placeholder="Employee Name"/>
                        <br/>
                        <Form.Control type="text" id="cNumber" placeholder="Claim Number" />
                        <br/>
                        <Form.Control type="text" id="cType" placeholder="Claim Type" />
                        <br/>
                        <Form.Control type="date" id="cstartDate" placeholder="Claim Start Date" />
                        <br/>
                        <Form.Control type="date" id="cendDate"  placeholder="Claim End Date" />
                        <br/>
                        <Form.Control type="text" id="cPrograms" placeholder="Claim Programs" />
                        <br/>
                        <Button variant="primary" type="submit" >Submit </Button>
                        <Button variant="warning" type="cancel" > Cancel </Button>
                    </Form.Group>
            </div>
        );
    }
}

export default ClaimUpdate;

