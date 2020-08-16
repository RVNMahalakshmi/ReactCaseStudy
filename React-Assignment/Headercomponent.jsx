import React from 'react'

class Header extends React.Component{
    render(){

        return(
            <header>
                <h1>Claim Summary Report</h1>
                <nav >
                    <div id="menucontainer">
                        <div id="menunav">
                            <ul>
                            <li><a href="submitSummary.html" title=""><span>Home</span></a></li>
                            <li><a href="submitSummary.html" title=""><span>Update&Submit Claim</span></a></li>
                            <li><a href="viewSummary.html" title=""><span>View Claim Summary</span></a></li>
                            <li><a href="submitSummary.html" title=""><span>Contact Us</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="logout">
                        <a href="loginNew.html" title=""/><span>LogOut</span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;