import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function AdminHeader() {
    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/admin_dashboard" >Dashboard</Link></li>
                        <li><Link to="/admin_user_registrations" >New User</Link></li>
                        <li><Link to="/admin_user_activity" >User Activity</Link></li>
                        <li><Link to="/officer_chat" >Chat</Link></li>
                        <li><Link to="/admin_profile" >Profile</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                        <li><Link to="/logout" >Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default AdminHeader;