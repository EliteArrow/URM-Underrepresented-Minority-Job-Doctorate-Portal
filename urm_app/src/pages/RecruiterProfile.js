import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';

function RecruiterProfile() {

    const userID = window.localStorage.getItem("userId");

    const [profileName, setProfileName] = useState('');
    const [profileEmail, setProfileEmail] = useState('');
    const [profilePassword, setProfilePassword] = useState('');
    const [profilePhoneNumber, setProfilePhoneNumber] = useState('');
    const [profileBio, setProfileBio] = useState('');
    const [profileDepartment, setProfileDepartment] = useState('');
    const [profileSkills, setProfileSkills] = useState('');
    const [message, setMessage] = useState('');


    const uploadFiles = async () => {
        const formData = new FormData()
        formData.append('userID', userID)
        formData.append('pName', profileName)
        formData.append('pEmail', profileEmail)
        formData.append('pPassword', profilePassword)
        formData.append('pPhoneNumber', profilePhoneNumber)
        formData.append('pBio', profileBio)
        formData.append('pDepartment', profileDepartment)
        formData.append('pSkills', profileSkills)

        const response = await axios.post("https://jxg0437.uta.cloud/backend/update_recruiter_profile.php", formData, {
            headers: { 'Content-Type': "multipart/form-data" },
        })

        if (response.data.success) {
            setMessage(response.data.success)
            alert('Profile Updated successfully')
        }
    }


    const handleLoadData = () => {
        fetchProfile(userID); // Use the existing fetchProfile function
    };

    const fetchProfile = (userID) => {
        const data = {
            userId: userID,
        };

        axios.post('https://jxg0437.uta.cloud/backend/fetch_recruiter_profile.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Profile Data fetched successfully', response.data.profileData)
                    console.log('Data:', response.data.profileData['Name'])

                    setProfileName(response.data.profileData['Name']);
                    setProfileEmail(response.data.profileData['Email']);
                    setProfilePassword(response.data.profileData['Password']);
                    setProfilePhoneNumber(response.data.profileData['Phone_Number']);
                    setProfileBio(response.data.profileData['Bio'])
                    setProfileDepartment(response.data.profileData['Department'])
                    setProfileSkills(response.data.profileData['Skills'])



                } else {
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error.response);
            });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        await uploadFiles();
    };

    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Recruiter Profile</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Profile Content --> */}
                <section id="profile" className="tile">
                    <form onSubmit={handleUpdateProfile}>
                        <div className="profile-image">
                            <span className="image fit">
                                <img src="assets/images/surya.jpg" alt="" />
                                {/* <input type="file" accept="image/*" id="profile" name="profile" placeholder="Upload Picture" /> */}
                            </span>

                            <div className="profile-actions">
                                <button type="button" className="cta-button" onClick={() => handleLoadData(userID)}>Load</button>
                            </div>
                        </div>

                        <div className="profile-info content">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={profileEmail}
                                onChange={(e) => setProfileEmail(e.target.value)}
                            />

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your Password"
                                value={profilePassword}
                                onChange={(e) => setProfilePassword(e.target.value)}
                            />

                            <label htmlFor="phone-number">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone-number"
                                name="phone-number"
                                placeholder="Your Phone Number"
                                value={profilePhoneNumber}
                                onChange={(e) => setProfilePhoneNumber(e.target.value)}
                            />

                            <label for="bio">Bio:</label>
                            <input
                                type="text"
                                id="bio"
                                name="bio"
                                placeholder="Your Bio"
                                value={profileBio}
                                onChange={(e) => setProfileBio(e.target.value)}
                            />

                            <label for="department">Department:</label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                placeholder="Your department"
                                value={profileDepartment}
                                onChange={(e) => setProfileDepartment(e.target.value)}
                            />

                            <label for="skills">Skills:</label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                placeholder="Your skills"
                                value={profileSkills}
                                onChange={(e) => setProfileSkills(e.target.value)}
                            />
                        </div>
                        <div className="profile-actions">
                            <button type="submit">Save Profile</button>
                        </div>
                    </form>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default RecruiterProfile;