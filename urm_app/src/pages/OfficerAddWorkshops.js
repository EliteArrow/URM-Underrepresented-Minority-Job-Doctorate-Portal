import React, { Fragment, useState } from "react";
import axios from "axios";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";

function OfficerAddWorkshops() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [leadName, setLeadName] = useState("");
  const [location, setLocation] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateTime = `${date} ${time}`; // Combine date and time

    try {
      const response = await axios.post(
        "https://mcn0672.uta.cloud/backend/officer_add_workshops.php",
        {
          Date_Time: dateTime,
          Leader: leadName,
          Location: location,
          Topic: topic,
          Status: "Upcoming", // Assuming the status is "New" when a workshop is created
        }
      );

      if (response.data.status === "success") {
        alert("Workshop added successfully!");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("API call failed: ", error);
      alert("Failed to add workshop. Please try again.");
    }
  };
  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>New Workshop Details</h1>
          <OfficerHeader />
        </div>
      </header>

      <main>
        <section id="profile" className="tile">
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <label htmlFor="lead-name">Lead Name</label>
            <input
              type="text"
              id="lead-name"
              name="lead-name"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              required
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />

            <div className="profile-actions">
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default OfficerAddWorkshops;
