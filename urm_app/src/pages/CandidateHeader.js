import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CandidateHeader() {

    return (
        <Fragment>
            <nav>
                <div className="call-to-action">
                    <ul>
                        <li><Link to="/candidate_dashboard" >Dashboard</Link></li>
                        <li><Link to="/candidate_jobsearch" >Job Search</Link></li>
                        <li><Link to="/candidate_jobapplied" >Job Applied</Link></li>
                        <li><Link to="/candidate_jobsaved" >Job Saved</Link></li>
                        <li><Link to="/candidate_chat" >Chat</Link></li>
                        <li><Link to="/candidate_profile" >Profile</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                        <li><Link to="/logout" >Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment >
    )
}

export default CandidateHeader;