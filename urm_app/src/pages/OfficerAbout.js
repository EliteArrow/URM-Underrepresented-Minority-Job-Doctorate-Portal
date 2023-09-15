import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import OfficerHeader from './OfficerHeader';
import IndexFooter from './IndexFooter';

function OfficerAbout() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>About DEI</h1>
                    <OfficerHeader />
                </div>
            </header>

            <main>
            <h1>About</h1><br/>
                <section id="homepage">
                
                    <h2>Purpose</h2>
                    <p>
                        The College of Engineering is committed to diversity and inclusion as part of a campus-level strategic
                        plan. URM is a comprehensive research institution whose mission is the advancement of knowledge and the
                        pursuit of excellence. The University promotes lifelong learning through academic and continuing
                        education programs and the formation of good citizenship through its service learning programs. The
                        diverse student body shares a wide range of cultural values and the University community fosters unity
                        of purpose and cultivates mutual respect. Toward these goals, the College is committed to increasing the
                        number and percentage of under-represented minorities among the students, faculty, and staff, to include
                        people from all cultural and demographic backgrounds.
                    </p>
                </section>

                <section id="homepage">
                    <h2>Goals, Objectives, Priority</h2>
                    <p>
                        Over the next five years, COE will place particular emphasis on the following priority goals:

                        Improve the mix of undergraduate students with diverse backgrounds by focusing COE recruitment efforts
                        across the United States in locations with higher populations of diverse K-12 students.
                        Maintain College Committee on Diversity, Equity, and Inclusion, in coordination with the College
                        leadership bodies, as a mechanism to spearhead the College’s DEI initiatives in collaboration with the
                        University DEI efforts.
                        Increase graduate student diversity by continuing active recruiting and participation in programs
                        devoted to diversity, equity and inclusion.
                        Increase faculty diversity by actively recruiting through national searches and opportunity hires.
                        Enhance faculty and student retention of underrepresented minorities and women through mentoring
                        programs and other supporting activities.
                    </p>
                </section>


                <section id="homepage">
                    <h2>DEI Officer Initiatives</h2>
                    <p>
                        A group of engineering students works together in an undergraduate lab class
                        We are committed to taking real action to address issues of diversity, equity and inclusion, and to
                        ensuring that our faculty, students and staff are heard and that the composition of our College
                        community mirrors that of the greater community. To that end, we have implemented several initiatives:
                    </p>
                    <p>
                        We established a permanent committee on diversity, equity and inclusion in the College which is
                        addressing a list of initiatives regarding issues related to race, ethnicity, gender and the other
                        identities within a diverse college.
                        We will conduct periodic climate checks with our student organizations including, but not limited to,
                        the National Society of Black Engineers, the Society of Hispanic Professional Engineers, the Society of
                        Asian Scientists and Engineers, and the Society of Women Engineers.
                        We established an ombudsman’s office for engineering undergraduates to provide an alternative and
                        confidential avenue for students to raise any problems they may be having, particularly associated with
                        diversity, equity and inclusion.
                        We established a permanent committee on diversity hiring to increase the diversity of the faculty. The
                        committee has actively pursued faculty candidates and has increased the number of African-American and
                        Hispanic faculty members since its creation.
                        We host speakers on issues and best practices related to diversity, equity and inclusion in engineering
                        and include DEI presentations as part of our ongoing virtual seminar series.
                        We continue to focus some of our efforts on recruiting students from high schools that have high
                        proportions of under-represented minorities and are working with the URM Office of Enrollment Management
                        to coordinate scholarship opportunities.
                    </p>
                </section>


                <section id="homepage">
                    <h2>College Committee</h2>
                    <p>
                        Dereje Agonafer - Mechanical and Aerospace Engineering |
                        Ishfaq Ahmad - Computer Science and Engineering |
                        Abeer Almughrabi - Civil Engineering |
                        Adrian Bautista - Dean's Office |
                        Alan Bowling - Mechanical and Aerospace Engineering |
                    </p>
                </section>


            </main>

            <IndexFooter />
        </Fragment>
    )

}

export default OfficerAbout;
