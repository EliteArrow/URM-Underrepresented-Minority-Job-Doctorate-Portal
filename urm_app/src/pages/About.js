import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function About() {
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
                {/* <!-- About Us Content --> */}
                <section id="homepage">
                    <h2>About Us</h2>
                    <p>Founded in 2023, The URM application is a website which provides opportunities pushes candidates to
                        academic excellence and tradition.
                    </p>
                </section>

                {/* <!-- Mission Content --> */}
                <section id="homepage">
                    <h2>Our Mission</h2>
                    <p>The application is a comprehensive tool to connect students to institutions that provide advancement of
                        knowledge and the pursuit of excellence.
                    </p>
                </section>

                {/* <!-- Accomplishments Content --> */}
                <section id="goal">
                    <h2>Accomplishments</h2>
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
                                <img src="assets/images/surya.jpg" alt="" />
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
                                <img src="assets/images/surya.jpg" alt="" />
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
                                <img src="assets/images/surya.jpg" alt="" />
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

export default About;