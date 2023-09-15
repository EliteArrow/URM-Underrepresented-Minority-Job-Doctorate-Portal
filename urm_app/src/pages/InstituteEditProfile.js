import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';


function InstituteEditProfile() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Institute Profile</h1>
                    <InstituteHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Profile Content --> */}
                <section id="profile" className="tile">
                    <form action="candidate_profile.php" method="POST">
                        <div className="profile-image">
                            <span className="image fit"><img src="assets/images/uta_logo.png" alt="" /></span>
                        </div>
                        <div className="profile-info content">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" />

                            <label for="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" />

                            <label for="phone-number">Phone Number:</label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="Your Phone Number" />

                            <label for="field-of-study">Research focus:</label>
                            <select id="field-of-study" name="field-of-study">
                                <option value="computer-science">Computer Science</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                                <option value="mathematics">Mathematics</option>
                                {/* <!-- Add more options as needed --> */}
                            </select>
                        </div>
                        <div className="profile-actions">
                            <Link to="/institute_profile">Save Profile</Link>
                        </div>
                    </form>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default InstituteEditProfile;