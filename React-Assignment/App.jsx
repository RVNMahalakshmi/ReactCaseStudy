import React from 'react';
class Hello extends React.Component{
        render(){

            let companies=["Capgeminin","Infosys","Cognizant"];

            return(
            <div>
                <h1>Hello Maha</h1>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>

                <ul>
               {
                   companies.map(function(company,index){
                       return <li key={index}>{company}</li>;
                   })
               }
            </ul>
            </div>
            
        );
    }
}

export default Hello;