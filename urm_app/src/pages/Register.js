import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';
import RegisterValidation from './RegisterValidation';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function Register() {
    const [values, setValues] = useState({
        type: '',
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(RegisterValidation(values));
    }, [values]);

    let history = useNavigate();
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        setErrors(RegisterValidation(values));

        // Check if type is "officer"
        if (values.type !== "officer") {
            alert("Registration only allowed for officers.");
            return;
        }

        emailjs.sendForm('service_w8wt3lb', 'template_x7l0yqp', form.current, 'k_McoBUbPRinJC2G9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        const data = {
            type: values.type,
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
        };

        console.log(data);

        axios.post('https://mcn0672.uta.cloud/backend/register.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    history('/login');
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

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
                <section id="registerpage">
                    <div className="overlay">
                        <div className="content">
                            <div id="candidateForm">
                                <form ref={form} onSubmit={sendEmail}>
                                    <label htmlFor="type">Type:</label>
                                    <select id="type" name="type" onChange={handleInput} required value={values.type}>
                                        <option value="">Select registration type</option>
                                        <option value="candidate">Candidate</option>
                                        <option value="institute">Institute</option>
                                        <option value="recruiter">Recruiter</option>
                                        <option value="officer">Officer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    {errors.type && <span className='text-danger'>{errors.type}</span>}
                                    <br />
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
                                    <input type="submit" value="Register" className="cta-button" />
                                    <Link to="/login" className="cta-button">Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <IndexFooter />
        </Fragment>
    )
}

export default Register;
