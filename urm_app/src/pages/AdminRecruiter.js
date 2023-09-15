import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminRecruiter() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Recruiters Information</h1>
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
                                    <th>S.no</th>
                                    <th>First_Name</th>
                                    <th>Last_Name</th>
                                    <th>College</th>
                                    <th>D.O.B</th>
                                    <th>Email</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Karthikeya</td>
                                    <td>Janjanam</td>
                                    <td>UTA</td>
                                    <td>04-27-2001</td>
                                    <td>karthikeya.janjanam56789@gmail.com</td>
                                    <td><Link to="/recruiter_profile" >View Profile</Link></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>XYZ University</td>
                                    <td>01-15-1990</td>
                                    <td>john.doe@example.com</td>
                                    <td><Link to="/recruiter_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Jane</td>
                                    <td>Smith</td>
                                    <td>ABC College</td>
                                    <td>08-10-1985</td>
                                    <td>jane.smith@example.com</td>
                                    <td><Link to="/recruiter_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Alice</td>
                                    <td>Johnson</td>
                                    <td>LMN University</td>
                                    <td>03-20-1995</td>
                                    <td>alice.johnson@example.com</td>
                                    <td><Link to="/recruiter_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>Michael</td>
                                    <td>Smith</td>
                                    <td>PQR College</td>
                                    <td>11-05-1988</td>
                                    <td>michael.smith@example.com</td>
                                    <td><Link to="/recruiter_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Sarah</td>
                                    <td>Williams</td>
                                    <td>DEF Institute</td>
                                    <td>09-12-1993</td>
                                    <td>sarah.williams@example.com</td>
                                    <td><Link to="/recruiter_profile">View Profile</Link></td>
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

export default AdminRecruiter;