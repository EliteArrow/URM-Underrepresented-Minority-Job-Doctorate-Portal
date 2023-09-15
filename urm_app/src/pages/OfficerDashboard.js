import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";
import BarChart from "../charts/BarChart";
import { OfficerDashboardData } from "./OfficerDashboardData";

function OfficerDashboard() {
  const [officerDashboardData, setOfficerDashboardData] = useState({
    labels: OfficerDashboardData.map((data) => data.Race),
    datasets: [
      {
        label: "Students",
        data: OfficerDashboardData.map((data) => data.Candidates),
      },
    ],
  });

  const [jobMatchedCount, setJobMatchedCount] = useState(0);
  const [interestedCandidatesCount, setInterestedCandidatesCount] = useState(0);
  const [totalRecruiters, setTotalRecruiters] = useState(0); // State for storing number of recruiters

  useEffect(() => {
    // Existing fetch for job matched count
    fetch("https://mcn0672.uta.cloud/backend/job_approved_fetch.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && data.jobs) {
          setJobMatchedCount(data.jobs.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Fetch for interested candidates count
    fetch("https://mcn0672.uta.cloud/backend/officer_fetch_interested_candidates.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && data.candidates) {
          setInterestedCandidatesCount(data.candidates.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Fetch for total number of recruiters
    fetch("https://mcn0672.uta.cloud/backend/officer_fetch_recruiter.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && data.recruiters) {
          setTotalRecruiters(data.recruiters.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>Officer Dashboard</h1>
          <OfficerHeader />
        </div>
      </header>

      <main>
        {/* <!--Begin Diversity Matrics Content--> */}

        {/* <!-- Dahsboard Content --> */}
        <section id="dashboard">
          <h1>Dashboard</h1>
          <div className="row">
            <article className="style1">
              <div className="graph-container">
                <div className="graph-info">
                  <h1>
                    <Link to="/officer_jobmatched" style={{ color: "black" }}>
                      Jobs Matched under DEI criteria
                    </Link>
                  </h1>
                  <span className="count">{jobMatchedCount}</span>
                </div>
                <div className="graph">
                  <BarChart chartData={officerDashboardData} />
                </div>
              </div>
            </article>
            <article className="style1">
              <div className="graph-container">
                <div className="graph-info">
                  <h1>
                    <Link to="/officer_candidates" style={{ color: "black" }}>
                      Interested Candidates
                    </Link>
                  </h1>
                  <span className="count">{interestedCandidatesCount}</span>
                </div>
                <div className="graph">
                  <BarChart chartData={officerDashboardData} />
                </div>
              </div>
            </article>
            <article className="style1">
              <div className="graph-container">
                <div className="graph-info">
                  <h1>
                    <Link to="/officer_recruiter" style={{ color: "black" }}>
                      Total Number of Recruiters
                    </Link>
                  </h1>
                  <span className="count">{totalRecruiters}</span>
                </div>
                <div className="graph">
                  <BarChart chartData={officerDashboardData} />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default OfficerDashboard;
