import React, { Fragment, useState } from "react";
import axios from "axios";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";

function OfficerEditPolicies() {
  const [policyData, setPolicyData] = useState([
    { title: "", content: "" },
    { title: "", content: "" },
    { title: "", content: "" },
    { title: "", content: "" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint for updating policies
      const response = await axios.post(
        "http://localhost/backend/officer_update_policy.php",
        { policies: policyData }
      );

      if (response.data.status === "success") {
        alert("Policies updated successfully!");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("API call failed: ", error);
      alert("Failed to update policies. Please try again.");
    }
  };

  const handleInputChange = (index, field, value) => {
    const newData = [...policyData];
    newData[index][field] = value;
    setPolicyData(newData);
  };

  return (
    <Fragment>
      <header>
        <OfficerHeader />
      </header>

      <main>
        <section id="profile" className="tile">
          <form onSubmit={handleSubmit}>
            {policyData.map((policy, index) => (
              <div key={index}>
                <label htmlFor={`policy-title-${index}`}>Policy Title {index + 1}</label>
                <input
                  type="text"
                  id={`policy-title-${index}`}
                  name={`policy-title-${index}`}
                  value={policy.title}
                  onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                  required
                />

                <label htmlFor={`policy-content-${index}`}>Policy Content {index + 1}</label>
                <textarea
                  id={`policy-content-${index}`}
                  name={`policy-content-${index}`}
                  value={policy.content}
                  onChange={(e) => handleInputChange(index, 'content', e.target.value)}
                  required
                />
              </div>
            ))}

            <div className="profile-actions">
              <button type="submit">Update Policies</button>
            </div>
          </form>
        </section>
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default OfficerEditPolicies;
