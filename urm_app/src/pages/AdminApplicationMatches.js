import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminApplicationMatches() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Application Matches</h1>
                    <AdminHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Jobs Applied Content --> */}
                <section id="jobsearch" className="tile">
                    <div className="search">
                        <input type="text" placeholder="Search by name, field of study, or institution" />
                        <button>Search</button>
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>Candidate Id</th>
                                    <th>Job Id</th>
                                    <th>Client</th>
                                    <th>Education</th>
                                    <th>Resume</th>
                                    <th>Current Status</th>
                                    <th>Chat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>UTA</td>
                                    <td>Master's in Human Resources</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Interview Pending</td>
                                    <td><Link to="/admin_chat" >Chat</Link></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>UNT</td>
                                    <td>Master's in Computer Science</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Interview Pending</td>
                                    <td><Link to="/admin_chat" >Chat</Link></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>UCLA</td>
                                    <td>Master's in Electrical</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Interview Pending</td>
                                    <td><Link to="/admin_chat" >Chat</Link></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>TAMU</td>
                                    <td>Master's in Business Analytics</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Interview Pending</td>
                                    <td><Link to="/admin_chat" >Chat</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>SDU</td>
                                    <td>Master's in Construction Management</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Interview Pending</td>
                                    <td><Link to="/admin_chat" >Chat</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default AdminApplicationMatches;