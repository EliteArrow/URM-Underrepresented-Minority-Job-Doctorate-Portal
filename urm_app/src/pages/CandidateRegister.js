import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';
import RegisterValidation from './RegisterValidation';


function CandidateRegister() {

    let history = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        demographic: '',
        field: '',
        education: '',
        experience: '',
        resume: '',
        personalStatement: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setErrors(RegisterValidation(values))
    }, [values])

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(RegisterValidation(values));

        const data = {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
            demographic: values.demographic,
            field: values.field,
            education: values.education,
            experience: values.experience,
            resume: values.resume, // You can handle file upload separately if needed
            personalStatement: values.personalStatement,
        };

        console.log(data)

        // Call the API to register the candidate
        axios.post('https://jxg0437.uta.cloud/backend/register.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    // Registration successful, navigate to the login page or appropriate dashboard
                    history('/login');
                } else {
                    // Registration failed, show an alert with the error message
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Candidate Register</h1>
                    <RegisterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Registration Content --> */}
                <section id="registerpage">
                    <div className="overlay">
                        <div className="content">
                            <div id="candidateForm">
                                <form action="" onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Enter name'
                                        onChange={handleInput}
                                        value={values.name}
                                        required
                                    />
                                    {errors.name && <span className='text-danger'>{errors.name}</span>}

                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Enter email'
                                        onChange={handleInput}
                                        value={values.email}
                                        required
                                    />
                                    {errors.email && <span className='text-danger'>{errors.email}</span>}

                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder='Enter phone number'
                                        onChange={handleInput}
                                        value={values.phoneNumber}
                                        required
                                    />
                                    {errors.phoneNumber && <span className='text-danger'>{errors.phoneNumber}</span>}

                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder='Enter password'
                                        onChange={handleInput}
                                        value={values.password}
                                        required
                                    />
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                                    <label htmlFor="demographic">Demographic Information:</label>
                                    <input
                                        type="text"
                                        id="demographic"
                                        name="demographic"
                                        placeholder='Enter location'
                                        onChange={handleInput}
                                        value={values.demographic}
                                    />

                                    <label htmlFor="field">Field of Study:</label>
                                    <input
                                        type="text"
                                        id="field"
                                        name="field"
                                        placeholder='Enter field'
                                        onChange={handleInput}
                                        value={values.field}
                                    />

                                    <label htmlFor="education">Educational Background:</label>
                                    <input
                                        type="text"
                                        id="education"
                                        name="education"
                                        placeholder='Enter educational background'
                                        onChange={handleInput}
                                        value={values.education}
                                    />

                                    <label htmlFor="experience">Research Experience:</label>
                                    <input
                                        type="text"
                                        id="experience"
                                        name="experience"
                                        placeholder='Enter research experience'
                                        onChange={handleInput}
                                        value={values.experience}
                                    />

                                    <label htmlFor="resume">Resume/CV:</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        placeholder='Upload resume'
                                        onChange={values.resume}
                                    />

                                    <label htmlFor="personalStatement">Personal Statement/Cover Letter:</label>
                                    <textarea
                                        id="personalStatement"
                                        name="personalStatement"
                                        placeholder='Upload cover letter'
                                        onChange={handleInput}
                                        value={values.personalStatement}
                                    ></textarea>

                                    <input type="submit" value="Register" className="cta-button" />
                                    <Link to="/login">Login</Link>
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

export default CandidateRegister;