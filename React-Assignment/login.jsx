import React from 'react';
import { Button } from 'react-bootstrap';
class Login extends React.Component{

    render(){

        return(
            
            <div class="login-wrap">
                        <div class="login-html">
                        <div class="login-form">
                            <div class="group">
                                <label for="user" class="label">Username</label>
                                <input id="user" type="text" class="input"/>
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" data-type="password"/>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign In"/>
                            </div>
                        </div>
                    </div>
                </div>
        
        );
    }
}

export default Login; 