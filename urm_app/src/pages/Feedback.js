import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Feedback() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>URM Application</h1>
                    <IndexHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Feedback Content --> */}
                <section id="contact" className="contact-section">
                    <h1>Give Feedback</h1>
                    <p>Would love to listen from you.</p>
                    <div className="row">
                        <div className="col-8 col-12-small form-section">
                            <form method="post" action="contact_admin.php">
                                <div className="row gtr-uniform gtr-50">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="rating">
                                    <p>Rate your experience:</p>
                                    <div className="rating-icons">
                                        <input type="radio" id="great" name="rating" value="great" />
                                        <label for="great">😀 Great</label>
                                        <input type="radio" id="good" name="rating" value="good" />
                                        <label for="good">🙂 Good</label>
                                        <input type="radio" id="so-so" name="rating" value="so-so" />
                                        <label for="so-so">😐 So-so</label>
                                        <input type="radio" id="bad" name="rating" value="bad" />
                                        <label for="bad">🙁 Bad</label>
                                    </div>
                                </div>
                                <div className="comments">
                                    <p>Any comments?</p>
                                    <textarea name="comments" id="comments" placeholder="Enter your comments here"
                                        rows="4"></textarea>
                                </div>
                                {/* <!-- <div className="follow-up">
                            <input type="checkbox" id="follow-up" name="follow-up" value="yes"/>
                            <label for="follow-up">I would like to be contacted for a follow-up.</label>
                        </div>
                        <div className="transcript">
                            <input type="checkbox" id="transcript" name="transcript" value="yes"/>
                            <label for="transcript">Email yourself a transcript of this chat</label>
                        </div> --> */}
                                <input type="submit" value="Submit Feedback" className="button primary" />
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default Feedback;