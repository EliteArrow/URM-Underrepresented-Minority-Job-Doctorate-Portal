import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Roles() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>URM Application</h1>
                    <IndexHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Roles Content --> */}
                <section id="goal">
                    <div className="tile-container">
                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/surya.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/candidate_dashboard">Candidate</Link></p>
                                </div>
                            </div>
                        </article>

                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/ins.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/institute_dashboard">Institute</Link></p>
                                </div>
                            </div>
                        </article>

                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/add-friend.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/recruiter_dashboard">Recruiter</Link></p>
                                </div>
                            </div>
                        </article>

                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/dei.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/officer_dashboard">DEI Officer</Link></p>
                                </div>
                            </div>
                        </article>

                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/admin.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/admin_dashboard">Admin</Link></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default Roles;