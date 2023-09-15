import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteRecruiter() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Recruiters Information</h1>
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

                    <div className="filters">
                        {/* <!-- Field of Study filter --> */}
                        <label for="field">Field of Study:</label>
                        <select id="field">
                            <option value="all">All</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                            <option value="physics">Physics</option>
                            <option value="mathematics">Mathematics</option>
                        </select>
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Bio</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sankalp Tripathi</td>
                                    <td>Recruiting since 1947.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>Austin</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Aditya Kaushik</td>
                                    <td>Recruiting since 2000.</td>
                                    <td>USA</td>
                                    <td>Massachusetts</td>
                                    <td>Boston</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Shaunak Amble</td>
                                    <td>Recruiting since 1947.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>San Antonio</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Shirin Shirvani</td>
                                    <td>Recruiting since 1998.</td>
                                    <td>USA</td>
                                    <td>California</td>
                                    <td>Los Angeles</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Jayasurya Guasekharan</td>
                                    <td>Recruiting since 1998.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>Arlington</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
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

export default InstituteRecruiter;