import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';

function RecruiterSetupInterview() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Interview Information</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                <section id="homepage">
                    <h2>Setup Interview Transcript</h2>
                    <form action="recruiter_video_interview.php" method="POST">
                        <div class="profile-info content">
                            <label for="video_interview">2 min video:</label>
                            <input type="file" id="video_interview" name="video_interview" />
                        </div>
                    </form>
                    <p>
                        In the 2-minute interview video, the candidate can talk about the following aspects related to the job
                        position:
                    </p>
                    <p>
                        Remember to be concise and focused in your video while covering important points. If the recruiter
                        requires further details or wants to discuss anything specific, they can inquire during the chat section
                        below the video. Use this opportunity to showcase your personality, passion, and suitability for the
                        job. Good luck!
                    </p>
                </section>

                <section id="homepage">
                    <h2>Contact Candidate</h2>
                    <p>
                        <Link to="/recruiter_chat" >Chat</Link>
                    </p>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    )

}

export default RecruiterSetupInterview;
