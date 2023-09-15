import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';


function AdminJobPosted() {
    function approve(event)
    {
        alert("Job Approved");
        var td= event.target.parentNode;
        var tr=td.parentNode;
        var tr=td.parentNode;
        tr.parentNode.removeChild(tr);
    }
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Job Posted</h1>
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
                                    <th>Job Id</th>
                                    <th>Job Description</th>
                                    <th>Department</th>
                                    <th>Location</th>
                                    <th>Pay Scale</th>
                                    <th>Qualifications</th>
                                    <th>Deadline</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>A human resources manager with people management skills and the ability to carry out
                                        duties in a way that promotes employee welfare and the company’s growth.</td>
                                    <td>Human Resources</td>
                                    <td>Arlington</td>
                                    <td>$70K-$85K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                        
                                            
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
                                            
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Austin</td>
                                    <td>$75K-$115K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>San Antonio</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                    <td>
                                    <Link className="job-actions" type="submit" onClick={approve}>Approve</Link>
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

export default AdminJobPosted;