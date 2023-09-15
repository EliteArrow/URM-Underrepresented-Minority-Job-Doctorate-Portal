import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';

function Blog() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>URM Blog</h1>
                    <IndexHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Blog Content --> */}
                <section id="homepage">
                    <h2>Welcome To Content Writing Services</h2>
                    <p>It is a blog for a newly established URM website.
                    </p>
                    <Link to="https://fascinating-jayasuryaguna.wordpress.com/">
                        <img src="assets/images/blog.png" alt="Blog" title='View Blog' />
                    </Link>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default Blog;