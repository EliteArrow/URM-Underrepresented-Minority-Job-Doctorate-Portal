import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminCandidates() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Candidates Information</h1>
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
                                    <th>Education</th>
                                    <th>D.O.B</th>
                                    <th>Email</th>
    
                                    <th>Current Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Karthikeya</td>
                                    <td>Janjanam</td>
                                    <td>Masters</td>
                                    <td>04-27-2001</td>
                                    <td>karthikeya.janjanam56789@gmail.com</td>
                                    
                                    <td>Under HR review</td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>Jayasurya</td>
                                    <td>Guna</td>
                                    <td>Masters</td>
                                    <td>04-27-2001</td>
                                    <td>jaya.guna@gmail.com</td>
                                    
                                    <td>Under HR review</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>Bachelor's</td>
                                    <td>09-15-1995</td>
                                    <td>john.doe@example.com</td>
                                    
                                    <td>Background Check Pending</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Jane</td>
                                    <td>Smith</td>
                                    <td>PhD</td>
                                    <td>05-03-1988</td>
                                    <td>jane.smith@example.com</td>
                                   
                                    <td>Background Check Pending</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Michael</td>
                                    <td>Johnson</td>
                                    <td>Bachelor's</td>
                                    <td>11-21-1990</td>
                                    <td>michael.johnson@example.com</td>

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

export default AdminCandidates;