import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';


function CandidateJobApplied() {

    const userID = window.localStorage.getItem("userId");


    // State to store the job data received from the API
    const [jobs, setJobs] = useState([]);

    const handleApplication = (event) => {
        event.preventDefault();

        const data = {
            userId: userID,
        };

        // Call the API to fetch the job data
        axios.post('https://jxg0437.uta.cloud/backend/application_fetch.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    // Job data fetched successfully, update the jobs state
                    setJobs(response.data.jobs);
                } else {
                    // Handle the case where no job data is found or there's an error
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Applied Jobs</h1>
                    <CandidateHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Jobs Applied Content --> */}
                <section id="jobsearch" className="tile">
                    <div className="search">
                        <input type="submit" value="Fetch Applications" className="cta-button" onClick={handleApplication} />
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>JobID</th>
                                    <th>CandidateID</th>
                                    <th>Bookmark</th>
                                    <th>Status</th>
                                    <th>Date_Applied</th>
                                    <th>Field</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job) => (
                                    <tr key={job.JobID}>
                                        <td>{job.JobID}</td>
                                        <td>{job.CandidateID}</td>
                                        <td>{job.Bookmark}</td>
                                        <td>{job.Status}</td>
                                        <td>{job.Date_Applied}</td>
                                        <td>{job.Field}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default CandidateJobApplied;