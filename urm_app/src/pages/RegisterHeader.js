import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function RegisterHeader() {
    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        {/* <li><Link to="/candidate_register" >Candidate</Link></li>
                        <li><Link to="/institute_register" >Institution</Link></li>
                        <li><Link to="/recruiter_register" >Recruiter</Link></li>
                        <li><Link to="/officer_register" >Officer</Link></li>
                        <li><Link to="/admin_register" >Admin</Link></li> */}
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default RegisterHeader;