import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';
import LoginValidation from './LoginValidation';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        type: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInput = event => {
        const { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const validationErrors = LoginValidation(values);
        setErrors(validationErrors);

        if (!Object.keys(validationErrors).length) {
            try {
                const response = await axios.post('http://localhost/backend/login.php', values);
                const { status, type, userData, message } = response.data;
                
                if (status === 'success') {
                    const userIdKeyMap = {
                        candidate: 'CandidateID',
                        institute: 'InstitutionID',
                        recruiter: 'RecruiterID',
                        officer: 'OfficerID',
                        admin: 'AdminID'
                    };

                    const userDashboardMap = {
                        candidate: '/candidate_dashboard',
                        institute: '/institute_dashboard',
                        recruiter: '/recruiter_dashboard',
                        officer: '/officer_dashboard',
                        admin: '/admin_dashboard'
                    };

                    window.localStorage.setItem('isLoggedIn', true);
                    window.localStorage.setItem('userType', type);
                    window.localStorage.setItem('userId', userData[userIdKeyMap[type]]);
                    
                    navigate(userDashboardMap[type]);
                } else {
                    alert(message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>Login</h1>
          <IndexHeader />
        </div>
      </header>

      <main>
        {/* <!-- Homepage Content --> */}
        <section id="loginpage">
          <div className="tile-container">
            <article className="style1">
              <div className="overlay">
                <div className="content">
                  <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="type">Type:</label>
                    <select
                      id="type"
                      name="type"
                      onChange={handleInput}
                      required
                      value={values.type}
                    >
                      <option value="">Select login type</option>
                      <option value="candidate">Candidate</option>
                      <option value="institute">Institute</option>
                      <option value="recruiter">Recruiter</option>
                      <option value="officer">Officer</option>
                      <option value="admin">Admin</option>
                    </select>
                    {errors.type && (
                      <span className="text-danger">{errors.type}</span>
                    )}

                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleInput}
                      value={values.email}
                      required
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}

                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={handleInput}
                      value={values.password}
                      required
                    />
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}

                    <input
                      type="submit"
                      value="Log In"
                      className="cta-button"
                    />
                    <Link to="/forgot_password">Forgot Password</Link>
                    <Link to="/register" className="">
                      Sign Up
                    </Link>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default Login;
