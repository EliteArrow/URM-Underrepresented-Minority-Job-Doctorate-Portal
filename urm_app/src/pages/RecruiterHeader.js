import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function RecruiterHeader() {
    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/recruiter_dashboard" >Dashboard</Link></li>
                        <li><Link to="/recruiter_about" >About</Link></li>
                        {/* <li><Link to="/recruiter_user_registrations" >Users</Link></li> */}
                        <li><Link to="/recruiter_chat" >Chat</Link></li>
                        <li><Link to="/recruiter_profile" >Profile</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                        <li><Link to="/logout" >Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default RecruiterHeader;