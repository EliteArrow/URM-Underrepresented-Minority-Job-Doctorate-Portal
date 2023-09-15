import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/services" >Services</Link></li>
                        <li><Link to="/login" >Login</Link></li>
                        <li><Link to="/register" >SignUp</Link></li>
                        <li><Link to="/roles" >Roles</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="/feedback" >Feedback</Link></li>
                        <li><Link to="/troubleshoot" >Help and Support</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                        <li><Link to="/chat" >Chat</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default Index;