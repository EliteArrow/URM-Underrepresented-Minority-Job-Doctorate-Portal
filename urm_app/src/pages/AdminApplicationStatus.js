import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminApplicationStatus() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Application Status</h1>
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
                                    <th>Education</th>
                                    <th>Resume</th>
                                    <th>Current Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Master's in Human Resources</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Under HR review</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>Master's in Computer Science</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Background Check Pending</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>Master's in Electrical</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Under HR review</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>Master's in Business Analytics</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Background Check Pending</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>Master's in Construction Management</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>Under HR review</td>
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

export default AdminApplicationStatus;