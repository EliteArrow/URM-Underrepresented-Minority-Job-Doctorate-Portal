import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';


function CandidateProfile() {

    const userID = window.localStorage.getItem("userId");

    const [profileName, setProfileName] = useState('');
    const [profileEmail, setProfileEmail] = useState('');
    const [profilePassword, setProfilePassword] = useState('')
    const [profileAddress, setProfileAddress] = useState('');
    const [profilePhoneNumber, setProfilePhoneNumber] = useState('');
    const [profileFieldOfStudy, setProfileFieldOfStudy] = useState('');
    const [profileEducation, setProfileEducation] = useState('');
    const [profileExperience, setProfileExperience] = useState('');
    const [profileDateOfBirth, setProfileDateOfBirth] = useState('');
    const [profileSummary, setProfileSummary] = useState('');
    const [profileIsURM, setProfileIsURM] = useState('');
    const [profileRace, setProfileRace] = useState('');
    const [profileResume, setProfileResume] = useState('');
    const [profileCV, setProfileCV] = useState('');
    const [profileAcademicRecords, setProfileAcademicRecords] = useState('');
    const [message, setMessage] = useState('');

    const uploadFiles = async () => {
        const formData = new FormData()
        formData.append('userID', userID)
        formData.append('pName', profileName)
        formData.append('pEmail', profileEmail)
        formData.append('pPassword', profilePassword)
        formData.append('pAddress', profileAddress)
        formData.append('pPhoneNumber', profilePhoneNumber)
        formData.append('pFieldOfStudy', profileFieldOfStudy)
        formData.append('pEducation', profileEducation)
        formData.append('pExperience', profileExperience)
        formData.append('pDateOfBirth', profileDateOfBirth)
        formData.append('pSummary', profileSummary)
        formData.append('pIsURM', profileIsURM)
        formData.append('pRace', profileRace)
        formData.append('pResume', profileResume)
        formData.append('pCV', profileCV)
        formData.append('pAcademicRecords', profileAcademicRecords)

        const response = await axios.post("https://jxg0437.uta.cloud/backend/update_profile.php", formData, {
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

        axios.post('https://jxg0437.uta.cloud/backend/fetch_profile.php', data)
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Profile Data fetched successfully', response.data.profileData)
                    console.log('Data:', response.data.profileData['Name'])

                    setProfileName(response.data.profileData['Name']);
                    setProfileEmail(response.data.profileData['Email']);
                    setProfilePassword(response.data.profileData['Password']);
                    setProfileAddress(response.data.profileData['Address']);
                    setProfilePhoneNumber(response.data.profileData['Phone_Number']);
                    setProfileFieldOfStudy(response.data.profileData['Field_Of_Study']);
                    setProfileEducation(response.data.profileData['Education']);
                    setProfileExperience(response.data.profileData['Experience']);
                    setProfileDateOfBirth(response.data.profileData['Date_Of_Birth']);
                    setProfileSummary(response.data.profileData['Summary']);
                    setProfileIsURM(response.data.profileData['IsURM']);
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
                    <h1>Candidate Profile</h1>
                    <CandidateHeader />
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

                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Your Address"
                                value={profileAddress}
                                onChange={(e) => setProfileAddress(e.target.value)}
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

                            <label htmlFor="field-of-study">Field of Study:</label>
                            <select
                                id="field-of-study"
                                name="field-of-study"
                                value={profileFieldOfStudy}
                                onChange={(e) => setProfileFieldOfStudy(e.target.value)}
                            >
                                <option value="">Select Field of Study</option>
                                <option value="computer-science">Computer Science</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                                <option value="mathematics">Mathematics</option>
                                {/* Add more options as needed */}
                            </select>

                            <label htmlFor="education">Education:</label>
                            <input
                                type="text"
                                id="education"
                                name="education"
                                placeholder="Your Education"
                                value={profileEducation}
                                onChange={(e) => setProfileEducation(e.target.value)}
                            />

                            <label htmlFor="experience">Experience:</label>
                            <input
                                type="text"
                                id="experience"
                                name="experience"
                                placeholder="Your Experience"
                                value={profileExperience}
                                onChange={(e) => setProfileExperience(e.target.value)}
                            />

                            <label htmlFor="date-of-birth">Date of Birth:</label>
                            <input
                                type="date"
                                id="date-of-birth"
                                name="date-of-birth"
                                placeholder="Your Date of Birth"
                                value={profileDateOfBirth}
                                onChange={(e) => setProfileDateOfBirth(e.target.value)}
                            />

                            <label htmlFor="summary">Summary:</label>
                            <textarea
                                id="summary"
                                name="summary"
                                placeholder="Write your summary"
                                value={profileSummary}
                                onChange={(e) => setProfileSummary(e.target.value)}
                            />

                            <label htmlFor="is-urm">Is URM:</label>
                            <input
                                type="checkbox"
                                id="is-urm"
                                name="is-urm"
                                value={profileIsURM}
                                onChange={(e) => setProfileIsURM(e.target.value)}
                            />

                            <label htmlFor="race">Race:</label>
                            <input
                                type="text"
                                id="race"
                                name="race"
                                placeholder="Your Race"
                                value={profileRace}
                                onChange={(e) => setProfileRace(e.target.value)}
                            />

                            <label htmlFor="resume">Resume:</label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                onChange={(e) => setProfileResume(e.target.files[0])}
                                required
                            />

                            <label htmlFor="cv">CV:</label>
                            <input
                                type="file"
                                id="cv"
                                name="cv"
                                onChange={(e) => setProfileCV(e.target.files[0])}
                                required
                            />

                            <label htmlFor="academic_records">Academic Records:</label>
                            <input
                                type="file"
                                id="academic_records"
                                name="academic_records"
                                onChange={(e) => setProfileAcademicRecords(e.target.files[0])}
                                required
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

export default CandidateProfile;