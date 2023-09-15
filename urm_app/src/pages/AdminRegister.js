import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';


function AdminRegister() {
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
                {/* <!-- Admin Registration Content --> */}
                <section id="registerpage">
                    <div className="overlay">
                        <div className="content">
                            <div id="officerForm">
                                <form action="register_officer.php" method="POST">
                                    <label for="name">Admin Name:</label>
                                    <input type="text" id="name" name="name" required />

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required />


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

export default AdminRegister;