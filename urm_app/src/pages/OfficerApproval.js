import React, { Fragment, useState } from "react";
import OfficerHeader from "./OfficerHeader";
import { Link } from "react-router-dom";
import IndexFooter from "./IndexFooter";
import axios from "axios";

function OfficerApproval() {
  const userID = window.localStorage.getItem("userId");
  const [positions, setPositions] = useState([]);

  const handleFetchPositions = (event) => {
    event.preventDefault();

    axios
      .get("https://mcn0672.uta.cloud/backend/officer_fetch_all_positions.php")
      .then((response) => {
        if (response.data.status === "success") {
          setPositions(response.data.positions);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleApprovePosition = (positionID) => {
    const data = { PositionID: positionID };

    axios
      .post("https://mcn0672.uta.cloud/backend/officer_approve_position.php", data)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Position Approved Successfully");
          handleFetchPositions(); // Reload the positions
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRejectPosition = (positionID) => {
    const data = { PositionID: positionID };

    axios
      .post("https://mcn0672.uta.cloud/backend/officer_reject_position.php", data)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Position Rejected Successfully");
          handleFetchPositions(); // Reload the positions
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>Position Approval</h1>
          <OfficerHeader />
        </div>
      </header>
      <main>
      <h1>Job Approvals</h1><br/>
        <section id="jobsearch" className="tile">
          <div className="search">
            <input
              type="submit"
              value="Fetch Positions"
              className="cta-button"
              onClick={handleFetchPositions}
            />
          </div>
          <div className="job-applied">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Field of Study</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Qualifications</th>
                  <th>Salary</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {positions.map((position) => (
    <tr key={position.PositionID}>
        <td>{position.Title}</td>
        <td>{position.Field_of_Study}</td>
        <td>{position.Description}</td>
        <td>{position.Location}</td>
        <td>{position.Required_Qualification}</td>
        <td>{position.Salary}</td>
        <td>{position.Deadline}</td>
        <td>{position.Status}</td>
        <td>
            <div className="job-actions">
                {(position.Status === "Under Review" || position.Status === "In-Progress") && (
                    <>
                        <button
                            type="button"
                            onClick={() => handleApprovePosition(position.PositionID)}
                        >
                            Approve
                        </button>
                        <button
                            type="button"
                            onClick={() => handleRejectPosition(position.PositionID)}
                        >
                            Reject
                        </button>
                    </>
                )}
                {/* Adding the View More button linking to the PositionDetail component */}
                <Link
                    to={`/position-detail/${position.PositionID}`}
                >
                    View More
                </Link>
            </div>
        </td>
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

export default OfficerApproval;
