import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';

function RecruiterAbout() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>About Recruiter</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                <section id="homepage">
                    <h2>Story</h2>
                    <p>
                        We’ve always done things differently. Born from the idea that staffing could be less about financial
                        gain and corporate in-roads, and more about genuine relationships and meaningful impact, the company was
                        founded as an entrepreneurial start-up in 2001. Since then, we’ve grown exponentially, and in a number
                        of ways. Today, we are a purpose-driven company that’s dedicated to empowering people through the value of opportunity.
                        We give it our all to put people to work.
                    </p>
                </section>
                <section id="homepage">
                    <h2>Cares about everyone</h2>
                    <p>
                        We aren’t just a staffing company. We’re a company that cares for others. It might sound lofty, but it’s
                        the idea that gets us up everyday, determined to make it true. Insight Global is a company that people
                        can anchor to in moments of triumph, struggle, and every time in between. Whoever you are and wherever
                        you come from, you matter to us and we have your back.
                    </p>
                </section>
                <section id="homepage">
                    <h2>Purpose</h2>
                    <p>
                        We believe that if we can develop our people to become the best versions of themselves, then they will
                        turn around and take care of our customers, our consultants, and our candidates in ways that far exceed
                        any expectations.
                    </p>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    )

}

export default RecruiterAbout;
