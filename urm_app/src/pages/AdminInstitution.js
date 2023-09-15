import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminApplicationMatches() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Institutes Information</h1>
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
                                    <th>Name</th>
                                    <th>QS_Rank</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>Email</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>University of Texas at Arlington</td>
                                    <td>288</td>
                                    <td>USA</td>
                                    <td>TX</td>
                                    <td>Uta@mavs.uta.edu</td>
                                    <td><Link to="/institute_profile" >View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>University of Texas at Dallas</td>
                                    <td>288</td>
                                    <td>USA</td>
                                    <td>TX</td>
                                    <td>Utd@utd.edu</td>
                                    <td><Link to="/institute_profile" >View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>University of North Texas</td>
                                    <td>288</td>
                                    <td>USA</td>
                                    <td>TX</td>
                                    <td>Unt@unt.edu</td>
                                    <td><Link to="/institute_profile" >View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>University of Memphis</td>
                                    <td>288</td>
                                    <td>USA</td>
                                    <td>Tennessee</td>
                                    <td>Uofm@uofm.edu</td>
                                    <td><Link to="/institute_profile" >View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>University of Arkansas</td>
                                    <td>288</td>
                                    <td>USA</td>
                                    <td>TX</td>
                                    <td>Uofa@uofa.edu</td>
                                    <td><Link to="/institute_profile" >View Profile</Link></td>
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