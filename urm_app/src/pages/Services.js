import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Services() {
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
                {/* <!-- Services Content --> */}
                <section id="goal">
                    <div className="tile-container">
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Register</h3>
                                <img src="assets/images/pic02.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Candidate/Institute/Recruiter/Officer</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Login</h3>
                                <img src="assets/images/pic01.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Candidate/Institute/Recruiter/Officer</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Search Jobs</h3>
                                <img src="assets/images/pic03.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Candidate</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Post Jobs</h3>
                                <img src="assets/images/pic04.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Institute</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Match Jobs</h3>
                                <img src="assets/images/pic02.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Recruiter</p>
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

export default Services;