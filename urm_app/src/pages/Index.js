import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';

function Index() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>URM Application</h1>
                    <IndexHeader />
                    <img src="assets/images/uta_logo.png" className="user-pic" alt=""></img>
                </div>
            </header>
            <main>
                {/* <!-- Homepage Content --> */}
                <section id="homepage">
                    <h2>Homepage</h2>
                    <p>The URM Application project aims to address the underrepresentation of underrepresented minority URM
                        candidates in academia by providing a platform that connects academia, URM candidates, diversity,
                        equity, and inclusion DEI officers, and recruiters. The website serves as a centralized platform that
                        facilitates communication, job search, and matching processes. This report provides an in-depth
                        understanding of the project, focusing on the entity relationship diagram ERD and the system's
                        functionality.
                    </p>
                </section>

                {/* <!-- Goal Content --> */}
                <section id="goal">
                    <h2>Your SUCCESS story is next</h2>
                    <div className="tile-container">
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Surya</h3>
                                <img src="assets/images/surya.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details">Luffy</p>
                                </div>
                            </div>
                        </article>


                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Sankalp</h3>
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p>Zoro</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Shaunak</h3>
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p>Brook</p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3 className="text">Aditya</h3>
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p>Sanji</p>
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

export default Index;