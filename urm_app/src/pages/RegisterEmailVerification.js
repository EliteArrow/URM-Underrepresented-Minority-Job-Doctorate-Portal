import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useHistory } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';
import RegisterValidation from './RegisterValidation';
import axios from 'axios';


export const RegisterEmailVerification = () => {

    const history = useNavigate();

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setTimeout(() => {
            history.push('/candidate_profile')
        }, 30000)
    }, [history])

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
                {/* <!-- Verification Content --> */}
                <section id="homepage">
                    <h2>Thanks for Signing Up!</h2>
                    <p>
                        A verification email has been sent to the email address you provided.
                    </p>
                    <p>
                        Please click on the link in the email to verify your account.
                    </p>
                </section>
            </main>


            <IndexFooter />
        </Fragment >
    )
}

export default RegisterEmailVerification;