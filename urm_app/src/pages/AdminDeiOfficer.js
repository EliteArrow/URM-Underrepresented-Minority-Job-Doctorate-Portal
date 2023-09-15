import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminRecruiter() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Officer Information</h1>
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
                                    <th>Company</th>
                                    <th>Position</th>
                                    <th>Email</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Karthikeya</td>
                                    <td>Amazon</td>
                                    <td>Developer</td>
                                    <td>karthikeya.janjanam56789@gmail.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>Google</td>
                                    <td>Software Engineer</td>
                                    <td>john.doe@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Jane</td>
                                    <td>Microsoft</td>
                                    <td>Data Analyst</td>
                                    <td>jane.smith@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Alice</td>
                                    <td>Apple</td>
                                    <td>UX Designer</td>
                                    <td>alice@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>Michael</td>
                                    <td>Facebook</td>
                                    <td>Product Manager</td>
                                    <td>michael@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Sarah</td>
                                    <td>Netflix</td>
                                    <td>Content Creator</td>
                                    <td>sarah@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>David</td>
                                    <td>Tesla</td>
                                    <td>Hardware Engineer</td>
                                    <td>david@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td>Emily</td>
                                    <td>SpaceX</td>
                                    <td>Aerospace Engineer</td>
                                    <td>emily@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td>Daniel</td>
                                    <td>IBM</td>
                                    <td>Data Scientist</td>
                                    <td>daniel@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>Lisa</td>
                                    <td>Uber</td>
                                    <td>Driver Partner</td>
                                    <td>lisa@example.com</td>
                                    <td><Link to="/officer_profile">View Profile</Link></td>
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