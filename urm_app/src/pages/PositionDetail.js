import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PositionDetail() {
  const [position, setPosition] = useState({});
  const [applicants, setApplicants] = useState([]);
  const { positionId } = useParams();

  useEffect(() => {
    fetchPositionDetails();
    fetchPositionApplicants();
  }, [positionId]);

  const fetchPositionDetails = async () => {
    try {
      const response = await axios.get(`https://mcn0672.uta.cloud/backend/officer_fetch_position_details.php?PositionID=${positionId}`);
      if (response.data.status === "success" && response.data.position) {
        setPosition(response.data.position);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching position details:", error);
    }
  };

  const fetchPositionApplicants = async () => {
    try {
      const response = await axios.get(`https://mcn0672.uta.cloud/backend/officer_fetch_position_applicants.php?PositionID=${positionId}`);
      if (response.data.status === "success" && response.data.applicants) {
        setApplicants(response.data.applicants);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching position applicants:", error);
    }
  };

  return (
    <div>
        <h2>Position Details</h2>
        <table>
            <tbody>
                <tr>
                    <td>Title:</td>
                    <td>{position.Title}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{position.Description}</td>
                </tr>
                <tr>
                    <td>Location:</td>
                    <td>{position.Location}</td>
                </tr>
                <tr>
                    <td>Salary:</td>
                    <td>{position.Salary}</td>
                </tr>
                <tr>
                    <td>Required Qualification:</td>
                    <td>{position.Required_Qualification}</td>
                </tr>
                <tr>
                    <td>Deadline:</td>
                    <td>{position.Deadline}</td>
                </tr>
                <tr>
                    <td>Field of Study:</td>
                    <td>{position.Field_of_Study}</td>
                </tr>
                <tr>
                    <td>Status:</td>
                    <td>{position.Status}</td>
                </tr>
            </tbody>
        </table>

        <h2>Candidates</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Applied</th>
                    <th>Experience</th>
                    <th>Education</th>
                    <th>Research Interest</th>
                    <th>Summary</th>
                    {/* Add other candidate fields here */}
                </tr>
            </thead>
            <tbody>
                {applicants.map((applicant) => (
                    <tr key={applicant.ApplicationID}>
                        <td>{applicant.Name}</td>
                        <td>{applicant.Email}</td>
                        <td>{applicant.Phone_number}</td>
                        <td>{new Date(applicant.Date_Applied).toLocaleDateString()}</td>
                        <td>{applicant.Experience}</td>
                        <td>{applicant.Education}</td>
                        <td>{applicant.Research_interest}</td>
                        <td>{applicant.Summary}</td>
                        {/* Add other applicant details here */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
;
}

export default PositionDetail;
