import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';

function AdminProfile() {

    const userID = window.localStorage.getItem("userId");

    const [profileName, setProfileName] = useState('');
    const [profileEmail, setProfileEmail] = useState('');
    const [profilePassword, setProfilePassword] = useState('');
    const [profilePhoneNumber, setProfilePhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const uploadFiles = async () => {
        const formData = new FormData()
        formData.append('userID', userID)
        formData.append('pName', profileName)
        formData.append('pEmail', profileEmail)
        formData.append('pPassword', profilePassword)
        formData.append('pPhoneNumber', profilePhoneNumber)

        const response = await axios.post("https://jxg0437.uta.cloud/backend/update_admin_profile.php", formData, {
            headers: { 'Content-Type': "multipart/form-data" },
        })

        if (response.data.success) {
            setMessage(response.data.success)
            alert('Profile Updated successfully')
        }
    }

    const handleLoadData = () => {
        fetchProfile(userID);
    };

    const fetchProfile = (userID) => {
        const data = {
            userId: userID,
        };

        axios.post('https://jxg0437.uta.cloud/backend/fetch_admin_profile.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Profile Data fetched successfully', response.data.profileData)

                    setProfileName(response.data.profileData['Name']);
                    setProfileEmail(response.data.profileData['Email']);
                    setProfilePassword(response.data.profileData['Password']);
                    setProfilePhoneNumber(response.data.profileData['Phone_Number']);

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
                    <h1>Super Admin Profile</h1>
                    <AdminHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt="" />
                </div>
            </header>

            <main>
                <section id="profile" className="tile">
                    <form onSubmit={handleUpdateProfile}>
                        <div className="profile-image">
                            <span className="image fit">
                                <img src="assets/images/surya.jpg" alt="" />
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
                        </div>
                        <div className="profile-actions">
                            <button type="submit">Save Profile</button>
                        </div>
                    </form>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    )
}

export default AdminProfile;
