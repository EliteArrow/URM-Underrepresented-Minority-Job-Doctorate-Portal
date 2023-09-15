import React, { Fragment, useState, useEffect } from "react";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";
import axios from "axios";

function OfficerPolicy() {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mcn0672.uta.cloud/backend/officer_fetch__policy.php")
      .then((response) => {
        if (response.data.status === "success") {
          setPolicies(response.data.policies);
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching policies:", error);
      });
  }, []);

  return (
    <Fragment>
      <header className="header-container">
        <h1>Current Policy</h1>
        <OfficerHeader />
      </header>

      <main>
      <h1>Policy Review</h1><br/>
        <section className="tile">
          <div className="search">
            <button>Modify Policy</button>
          </div>
        </section>

        {error && <p className="error-message">{error}</p>}

        {policies.map((policy) => (
          <section key={policy.JobID} className="policy-item"  id="homepage">
            <h2>{policy.Policy_Title}</h2>
            <p>{policy.Policy}</p>
          </section>
        ))}
      </main>

      <IndexFooter />
    </Fragment>
  );
}

export default OfficerPolicy;
