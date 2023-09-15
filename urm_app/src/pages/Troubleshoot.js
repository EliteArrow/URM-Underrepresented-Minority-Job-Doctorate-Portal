import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';

function OfficerAbout() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Troubleshoot</h1>
                    <IndexHeader />
                </div>
            </header>

            <main>
            <h1>Help and Suppport</h1><br/>
                <section id="homepage">
                    <h2>Check if the Site Is Down Only for You</h2>
                    <p>
                        The first step is to check if the site is down or if you’re the only one experiencing the issue.
                        Use a status tool like Site24x7 to monitor your website uptime. Enter your web address, and it will
                        provide ping, trace, port, health, and page speed information.
                        If your website is experiencing downtime, contact your hosting provider’s support team for assistance.
                    </p>
                </section>

                <section id="homepage">
                    <h2>Check the Network Connection</h2>
                    <p>
                        Using a poor connection may lead to your website not loading. To check it, access other websites – if
                        they work, there is nothing wrong with your internet connection.
                        However, if other websites are not loading, try accessing them using mobile data. If the pages are
                        working properly, the problem lies in the local network.
                        Reset the connection by restarting the router. Once you switch it off, wait a minute before turning it
                        back on. You can also unplug the internet cable and wait a few seconds before reconnecting it.
                    </p>
                </section>

                <section id="homepage">
                    <h2>Try a Different Browser</h2>
                    <p>
                        Your browser may be unable to load pages because of a caching issue. In this case, clear the browser
                        cache to start a fresh connection and see if the site loads.
                        If the error is still there, try accessing the page using another browser. If it opens in another web
                        browser, perform a cross-browser compatibility test using an online tool such as LambdaTest.
                        It lets you run real-time tests and debug errors using its native developer tools. If it is still not
                        possible to load the page after that, try the next method.
                    </p>
                </section>
            </main>

            <IndexFooter />
        </Fragment>
    )

}

export default OfficerAbout;
