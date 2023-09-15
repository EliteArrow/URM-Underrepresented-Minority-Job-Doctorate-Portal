import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteCandidatesInterested() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Candidates Interested</h1>
                    <InstituteHeader />
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
                                    <th>Education</th>
                                    <th>Resume</th>
                                    <th>Experience</th>
                                    <th>Interested In</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Master's in Human Resources</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>10 years</td>
                                    <td>Humanities</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Master's in Computer Science</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>6 years</td>
                                    <td>Technology</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Master's in Electrical</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>5 years</td>
                                    <td>Social Sciences</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Master's in Business Analytics</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>9 years</td>
                                    <td>Physical Sciences</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Master's in Construction Management</td>
                                    <td><a href="#">Resume</a></td>
                                    <td>8 years</td>
                                    <td>Technology</td>
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

export default InstituteCandidatesInterested;