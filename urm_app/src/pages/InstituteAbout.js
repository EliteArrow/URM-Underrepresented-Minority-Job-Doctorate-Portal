import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteAbout() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>About Institution</h1>
                    <InstituteHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Homepage Content --> */}
                <section id="homepage">
                    <h2>About</h2>
                    <p>As the largest university in North Texas and second largest in The University of
                        Texas System, UTA is located in the heart of Dallas-Fort Worth, challenging our students to
                        engage with the world around them in ways that make a measurable impact.

                        UTA offers state-of-the-art facilities that encourage students to be critical thinkers. Through
                        academic, internship, and research programs, our students receive real-world experiences that
                        help them contribute to their community and, ultimately, the world.

                        We have more than 180 baccalaureate, master's, and doctoral degree programs, and more than
                        41,000 students walking our campus or engaging in online coursework each year.
                    </p>
                </section>

                {/* <!-- Homepage Content --> */}
                <section id="homepage">
                    <h2>Maventure Camp</h2>
                    <p>Join us this summer at New Maverick Orientation where you'll learn about campus resources, discover
                        opportunities, connect with other students, and register for your first semester of classes.
                    </p>
                </section>

                {/* <!-- Homepage Content --> */}
                <section id="homepage">
                    <h2>New Maverick Orientation</h2>
                    <p>At Maventure Camp, new students will immerse themselves in UTA's rich history and traditions with fellow
                        incoming and current students. This summer, we are offering a 2-day overnight experience and a 1-day
                        experience.
                    </p>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default InstituteAbout;