import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';


function RecruiterRegister() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Register</h1>
                    <RegisterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Recruiter Registration Content --> */}
                <section id="registerpage">
                    <div className="overlay">
                        <div className="content">
                            <div id="recruiterForm">
                                <form action="register_recruiter.php" method="POST">
                                    <label for="name">Recruiter Name:</label>
                                    <input type="text" id="name" name="name" required />

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required />

                                    <label for="company">Company Name:</label>
                                    <input type="text" id="company" name="company" />

                                    <label for="phone">Phone:</label>
                                    <input type="text" id="phone" name="phone" />

                                    <input type="submit" value="Register" className="cta-button" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default RecruiterRegister;