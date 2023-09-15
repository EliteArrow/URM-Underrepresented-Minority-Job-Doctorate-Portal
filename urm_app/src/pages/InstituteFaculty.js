import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteFaculty() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Faculty Information</h1>
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
                                    <th>Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Elizabeth Diaz</td>
                                    <td>At the University of Texas at Arlington have taught Web Data Management and Data Mining.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>Austin</td>
                                    <td>Course: CSE 5335, section 001, Web Data Management</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>David Levine</td>
                                    <td>At the University of Texas at Arlington have taught Introduction to Computers and
                                        Programming, Discrete Structures, Theoretical Concepts, Programming Language Theory,
                                        Introduction to Engineering, and Database and File Systems.</td>
                                    <td>USA</td>
                                    <td>Massachusetts</td>
                                    <td>Boston</td>
                                    <td>Course: CSE 5335, section 001, Web Data Management</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Marnim Galib</td>
                                    <td>At the University of Texas at Arlington have taught Introduction to Computers and
                                        Programming, Discrete Structures, Theoretical Concepts, Programming Language Theory,
                                        Introduction to Engineering, and Database and File Systems.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>San Antonio</td>
                                    <td>Course: CSE 6332, section 001, Computer Vision</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Shirin Shirvani</td>
                                    <td>At the University of Texas at Arlington have taught Introduction to Computers and
                                        Programming, Discrete Structures, Theoretical Concepts, Programming Language Theory,
                                        Introduction to Engineering, and Database and File Systems.</td>
                                    <td>USA</td>
                                    <td>California</td>
                                    <td>Los Angeles</td>
                                    <td>Course: CSE 6311, section 001, DAMT</td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Details</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Jayasurya Guasekharan</td>
                                    <td>At the University of Texas at Arlington have taught Introduction to Computers and
                                        Programming, Discrete Structures, Theoretical Concepts, Programming Language Theory,
                                        Introduction to Engineering, and Database and File Systems.</td>
                                    <td>USA</td>
                                    <td>Texas</td>
                                    <td>Arlington</td>
                                    <td>Course: CSE 5333, section 001, Nueral Network</td>
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

export default InstituteFaculty;