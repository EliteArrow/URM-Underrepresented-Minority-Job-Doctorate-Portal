import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteResearch() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Research Areas</h1>
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
                            <tbody>
                                <tr>
                                    <td>Computer Science</td>
                                </tr>
                                <tr>
                                    <td>Arts and Humanities</td>
                                </tr>
                                <tr>
                                    <td>Life Sciences and Biomedicines</td>
                                </tr>
                                <tr>
                                    <td>Physical Sciences</td>
                                </tr>
                                <tr>
                                    <td>Social Sciences</td>
                                </tr>
                                <tr>
                                    <td>Technology</td>
                                </tr>
                                <tr>
                                    <td>Chemistry</td>
                                </tr>
                                <tr>
                                    <td>Biology</td>
                                </tr>
                                <tr>
                                    <td>Physics</td>
                                </tr>
                                <tr>
                                    <td>Mathematics</td>
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

export default InstituteResearch;