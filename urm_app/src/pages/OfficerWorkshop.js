import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";
import axios from "axios";

function Roles() {
  const [totalWorkshops, setTotalWorkshops] = useState(0);
  const [upcomingWorkshopsCount, setUpcomingWorkshopsCount] = useState(0);
  const [allWorkshops, setAllWorkshops] = useState([]);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]); // State for list of upcoming workshops

  useEffect(() => {
    axios
      .get("https://mcn0672.uta.cloud/backend/officer_fetch_all_workshops.php")
      .then((response) => {
        if (response.data.status === "success") {
          setAllWorkshops(response.data.workshops);
        }
      })
      .catch((error) => {
        console.error("API call failed: ", error);
      });

    // Fetching upcoming workshops
    axios
      .get("https://mcn0672.uta.cloud/backend/officer_fetch_upcoming_workshops.php")
      .then((response) => {
        if (response.data.status === "success") {
          setUpcomingWorkshops(response.data.upcoming_workshops);
          setUpcomingWorkshopsCount(response.data.upcoming_workshops.length);
        }
      })
      .catch((error) => {
        console.error("API call failed: ", error);
      });
  }, []);

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>Workshops</h1>
          <OfficerHeader />
        </div>
      </header>

      <main>
      <h1>Workshops</h1><br/>
        {/* <!-- Roles Content --> */}
        <section id="goal">
          <div className="tile-container">
            <article className="style1">
              <span className="image">
                <img src="assets/images/uta_logo.png" alt="" />
              </span>
              <div className="overlay">
                <div className="content">
                <h3><p className="details"> Total Workshops</p>
                  <p className="details">{totalWorkshops}</p></h3>
                </div>
              </div>
            </article>

            <article className="style1">
  <span className="image">
    <img src="assets/images/uta_logo.png" alt="" />
  </span>
  <div className="overlay">
    <div className="content">
    <h3><p className="details">Upcoming Workshops</p>
      <p className="details">{upcomingWorkshopsCount}</p>{" "}</h3>
      {/* Display the upcoming workshops count */}
    </div>
  </div>
</article>

            <article className="style1">
              <span className="image">
                <img src="assets/images/uta_logo.png" alt="" />
              </span>
              <div className="overlay">
                <div className="content">
                <h3><p className="details">
                    <Link to="/officer_add_workshop">Add New Workshops</Link>
                  </p></h3>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="jobsearch" className="tile">
          <h4>Upcoming Workshops</h4>
          <div className="job-applied">
            <table className="workshop-table">
              <thead>
                <tr>
                  <th>Date and Time</th>
                  <th>Leader</th>
                  <th>Location</th>
                  <th>Topic</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingWorkshops.map((workshop, index) => (
                  <tr key={workshop.WorkshopID}>
                    <td>{workshop.Date_Time}</td>
                    <td>{workshop.Leader}</td>
                    <td>{workshop.Location}</td>
                    <td>{workshop.Topic}</td>
                    <td>{workshop.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section id="jobsearch" className="tile">
          <h4>All Workshops</h4>
          <div className="job-applied">
            <table className="workshop-table">
              <thead>
                <tr>
                  <th>Date and Time</th>
                  <th>Leader</th>
                  <th>Location</th>
                  <th>Topic</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allWorkshops.map((workshop, index) => (
                  <tr key={workshop.WorkshopID}>
                    <td>{workshop.Date_Time}</td>
                    <td>{workshop.Leader}</td>
                    <td>{workshop.Location}</td>
                    <td>{workshop.Topic}</td>
                    <td>{workshop.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default Roles;
