import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';


function RecruiterUserRegistrations() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>User Information</h1>
                    <RecruiterHeader />
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

                    <div className="filters">
                        {/* <!-- Field of Study filter --> */}
                        <label for="status">Status:</label>
                        <select id="status">
                            <option value="registered">Registered</option>
                            <option value="active">Active</option>
                            <option value="deleted">Deleted</option>
                        </select>
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Registration Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>john.doe@example.com</td>
                                    <td>Institute</td>
                                    <td>2023-07-18</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>jane.smith@example.com</td>
                                    <td>Candidate</td>
                                    <td>2023-07-17</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Michael Johnson</td>
                                    <td>michael.johnson@example.com</td>
                                    <td>Candidate</td>
                                    <td>2023-07-18</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Susan Williams</td>
                                    <td>susan.williams@example.com</td>
                                    <td>Candidate</td>
                                    <td>2023-07-19</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>Robert Lee</td>
                                    <td>robert.lee@example.com</td>
                                    <td>Candidate</td>
                                    <td>2023-07-20</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Amy Miller</td>
                                    <td>amy.miller@example.com</td>
                                    <td>Candidate</td>
                                    <td>2023-07-21</td>
                                    <td>
                                        <Link to="/candidate_profile">View</Link> |
                                        <Link to="/candidate_dashboard">Approve</Link> |
                                        <Link to="/register">Delete</Link>
                                    </td>
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

export default RecruiterUserRegistrations;