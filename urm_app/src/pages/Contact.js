import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Contact() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Officer Profile</h1>
                    <IndexHeader />
                </div>
            </header>
            <main>
            <h1>Contact Admin</h1><br/>
                {/* <!-- Contact Content --> */}
                <section id="contact" className="contact-section">
                    <p>Would love to help you.</p>
                    <div className="row">
                        <div className="col-8 col-12-small form-section">
                            <form method="post" action="contact_admin.php">
                                <div className="row gtr-uniform gtr-50">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                    <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                                </div>
                                <input type="submit" value="Send Message" className="button primary" />
                            </form>
                        </div>
                        <div className="col-4 col-12-small address-section">
                            <div className="address">
                                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                <p>
                                    Street Address<br />
                                    City, State Pincode<br />
                                    Country
                                </p>
                            </div>
                            <div className="contact-info">
                                <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                <p>(XXX) XXX-XXXX</p>
                                <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                                <p><a href="mailto:jayasurya.guna@gmail.com">admin@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <IndexFooter/>
        </Fragment >
    )
}

export default Contact;