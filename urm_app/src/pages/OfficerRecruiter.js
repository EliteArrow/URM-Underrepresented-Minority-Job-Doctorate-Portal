import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OfficerHeader from './OfficerHeader';
import IndexFooter from './IndexFooter';

function OfficerRecruiter() {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        fetch("https://mcn0672.uta.cloud/backend/officer_fetch_recruiter.php")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success" && data.recruiters) {
                    setRecruiters(data.recruiters);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Recruiter Information</h1>
                    <OfficerHeader />
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
                                    <th>Recruiter ID</th>
                                    <th>Name</th>
                                    <th>Institution ID</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recruiters.map((recruiter, index) => (
                                    <tr key={recruiter.RecruiterID}>
                                        <td>{index + 1}</td>
                                        <td>{recruiter.RecruiterID}</td>
                                        <td>{recruiter.Name}</td>
                                        <td>{recruiter.InstitutionID}</td>
                                        <td>{recruiter.Email}</td>
                                        <td>{recruiter.Phone_Number}</td>
                                        <td><Link to={`/recruiter/${recruiter.RecruiterID}`}>View Profile</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    )
}

export default OfficerRecruiter;
