import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';

function InstituteJobPosted() {
    let history = useNavigate();

    // State to store the job data received from the API
    const [jobs, setJobs] = useState([]);

    // Function to fetch the job data when the component mounts
    useEffect(() => {
        // Fetch job data from the PHP script using Axios
        axios.get('https://jxg0437.uta.cloud/backend/job_action.php')
            .then((response) => {
                // Check if the response status is 'success' and update the jobs state
                if (response.data.status === 'success') {
                    setJobs(response.data.jobs);
                } else {
                    // Handle the case where no job data is found or there's an error
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleAdd = (event) => {
        event.preventDefault();
        history('/institute_add_job');
    };

    const handlefetchJob = (event) => {
        event.preventDefault();

        // Call the API to fetch the job data
        axios.get('https://jxg0437.uta.cloud/backend/job_fetch.php')
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
    const handleDelete = (jobID) => {
        // Call the API to delete the job with the given jobID
        axios.post('https://jxg0437.uta.cloud/backend/job_delete.php', { jobID })
            .then((response) => {
                if (response.data.status === 'success') {
                    // Job deleted successfully, update the jobs state by removing the deleted job
                    setJobs((prevJobs) => prevJobs.filter((job) => job.JobID !== jobID));
                } else {
                    // Handle the case where the job deletion failed or there's an error
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // Function to navigate to the page for modifying job details
    const handleModify = (jobID) => {
        history('/institute_edit_job/' + jobID);
    };

    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Job Posted</h1>
                    <InstituteHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Jobs Applied Content --> */}
                <section id="jobsearch" className="tile">
                    <div className="search">
                        <input type="submit" value="Add Job" className="cta-button" onClick={handleAdd} />
                        <input type="submit" value="Fetch Job" className="cta-button" onClick={handlefetchJob} />
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>Job Name</th>
                                    <th>Department</th>
                                    <th>Job Description</th>
                                    <th>Location</th>
                                    <th>Qualifications</th>
                                    <th>Salary</th>
                                    <th>Deadline</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job) => (
                                    <tr key={job.JobID}>
                                        <td>{job.Title}</td>
                                        <td>{job.Field_Of_Study}</td>
                                        <td>{job.Description}</td>
                                        <td>{job.Location}</td>
                                        <td>{job.Qualification}</td>
                                        <td>{job.Salary}</td>
                                        <td>{job.EndDate}</td>
                                        <td>
                                            <div className="job-actions">
                                                <button type="button" onClick={() => handleModify(job.JobID)}>Modify</button>
                                                <button type="button" onClick={() => handleDelete(job.JobID)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    );
}

export default InstituteJobPosted;
