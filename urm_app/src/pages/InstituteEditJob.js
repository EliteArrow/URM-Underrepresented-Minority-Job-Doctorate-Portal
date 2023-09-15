import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import InstituteHeader from './InstituteHeader';
import IndexFooter from './IndexFooter';
import axios from 'axios';

function InstituteEditJob() {
  // State to store the job data
  const [jobData, setJobData] = useState({
    job_name: '',
    department: '',
    description: '',
    location: '',
    qualification: '',
    salary: '',
    end_date: '',
  });

  // Get the job ID from the URL parameter
  const { jobID } = useParams();

  // Function to fetch the job data when the component mounts
  useEffect(() => {
    // Fetch job data from the PHP script using Axios
    axios
      .get(`https://jxg0437.uta.cloud/backend/job_fetch_by_Id.php?id=${jobID}`)
      .then((response) => {
        // Check if the response status is 'success' and update the jobData state
        if (response.data.status === 'success') {
          setJobData(response.data.job);
        } else {
          // Handle the case where no job data is found or there's an error
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [jobID]);

  // Function to handle input changes
  const handleInput = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });
  };

  // Function to handle form submission for updating the job
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the API to update the job data
    axios
      .post('https://jxg0437.uta.cloud/backend/job_update.php', jobData)
      .then((response) => {
        if (response.data.status === 'success') {
          // Job data updated successfully
          alert('Job data updated:', response.data.job);
          // You can choose to navigate to a different page or show a success message here
        } else {
          // Job data update failed
          console.error(response.data.message);
          // You can choose to show an error message here
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h1>Edit Job</h1>
          <InstituteHeader />
          <img src="assets/images/surya.jpg" className="user-pic" alt="" />
        </div>
      </header>

      <main>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="job_name">Title:</label>
          <input
            type="text"
            id="job_name"
            name="job_name"
            placeholder="Enter job name"
            onChange={handleInput}
            value={jobData.job_name}
            required
          />

          <label htmlFor="department">Department:</label>
          <select
            id="department"
            name="department"
            onChange={handleInput}
            required
            value={jobData.department}
          >
            <option value="">Select Department type</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="literature">Literature</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={handleInput}
            value={jobData.description}
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            onChange={handleInput}
            value={jobData.location}
            required
          />

          <label htmlFor="qualification">Required Qualification:</label>
          <select
            id="qualification"
            name="qualification"
            onChange={handleInput}
            required
            value={jobData.qualification}
          >
            <option value="">Select minimum qualification</option>
            <option value="bs">BS</option>
            <option value="ms">MS</option>
            <option value="phd">PHD</option>
          </select>

          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="Enter salary"
            onChange={handleInput}
            value={jobData.salary}
            required
          />

          <label htmlFor="end_date">Deadline Date:</label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            onChange={handleInput}
            value={jobData.end_date}
            required
          />

          <input type="submit" value="Update" className="cta-button" />
        </form>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default InstituteEditJob;
