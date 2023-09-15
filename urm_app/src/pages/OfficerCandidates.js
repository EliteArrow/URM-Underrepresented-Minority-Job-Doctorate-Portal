import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OfficerHeader from './OfficerHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';

function OfficerCandidates() {
    // State to store the candidates data received from the API
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // Call the API to fetch the candidates data when component mounts
        axios.get('https://mcn0672.uta.cloud/backend/officer_fetch_interested_candidates.php')
            .then((response) => {
                if (response.data.status === 'success') {
                    // Candidates data fetched successfully, update the candidates state
                    setCandidates(response.data.candidates);
                } else {
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Candidates</h1>
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

                    {/* <!-- Candidates Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>D.O.B</th>
                                    <th>Email</th>
                                    <th>Ethnicity</th>
                                    <th>Education</th>
                                    <th>Experience</th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.map((candidate) => (
                                    <tr key={candidate.CandidateID}>
                                        <td>{candidate.CandidateID}</td>
                                        <td>{candidate.Name}</td>
                                        <td>{candidate.Date_of_Birth}</td>
                                        <td>{candidate.Email}</td>
                                        <td>{candidate.Race}</td>
                                        <td>{candidate.Education}</td>
                                        <td>{candidate.Experience}</td>
                                        <td>{candidate.Summary}</td>
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

export default OfficerCandidates;
