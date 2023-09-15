import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function ForgotPassword() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Reset Password</h1>
                    <IndexHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Forgot Password Content --> */}
                <section id="loginpage">
                    <div className="tile-container">
                        <article className="style1">
                            <h2>Forgot Password</h2>
                            <h3>Please provide your email address to reset your password.</h3>
                            <form action="password_reset.php" method="POST">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                <input type="submit" value="Reset Password" className="cta-button" />
                            </form>
                        </article>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default ForgotPassword;