import React from 'react';
import { Button } from 'react-bootstrap';

class MyStatecomponent extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:[]
        }
        this.updateState=this.updateState.bind(this);
    };

    updateState(){
        console.log('update the state component...');
        var item="setTime... "+Date.now();
        var myArray=this.state.data;
        myArray.push(item);
        this.setState({data: myArray  });
    }

    render(){
        return(
            <div>
                <Button variant="primary" onClick= {this.updateState}>UpdatedState</Button>
                <p>{this.state.data}</p>
            </div>
        );
    }
}
export default MyStatecomponent;