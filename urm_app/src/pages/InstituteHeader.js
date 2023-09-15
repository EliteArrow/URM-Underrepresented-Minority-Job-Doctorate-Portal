import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function InstituteHeader() {
    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/institute_dashboard" >Dashboard</Link></li>
                        <li><Link to="/institute_about" >About</Link></li>
                        <li><Link to="/institute_chat" >Chat</Link></li>
                        <li><Link to="/institute_profile" >Profile</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                        <li><Link to="/logout" >Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default InstituteHeader;