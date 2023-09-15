import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const history = useNavigate();

    // Handle the logout process
    const handleLogout = () => {
        // Remove user session data from local storage
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('userType');
        window.localStorage.removeItem('userId');

        // Navigate the user back to the login page
        history('/login');
    };

    return (
        <main>
            {/* <!-- Blog Content --> */}
            <section id="homepage">
                <h2>Are you sure?</h2>
                <p>Click Logout once again.
                </p>
                <button className="cta-button" onClick={handleLogout}>Logout</button>
            </section>
        </main>
    );
}

export default Logout;
