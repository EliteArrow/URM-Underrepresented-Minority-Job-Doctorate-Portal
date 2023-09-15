import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OfficerHeader from "./OfficerHeader";
import IndexFooter from "./IndexFooter";
import BarChart from "../charts/BarChart";
import { OfficerDashboardData } from "./OfficerDashboardData";
import { Pie, Bar } from "react-chartjs-2";

function OfficerDiversityMatrics() {
  const [officerDashboardData, setOfficerDashboardData] = useState({
    labels: OfficerDashboardData.map((data) => data.Race),
    datasets: [
      {
        label: "Students",
        data: OfficerDashboardData.map((data) => data.Candidates),
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

  const [ageGroupData, setAgeGroupData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

  const [genderData, setGenderData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB"], // Colors for female and male respectively. You can modify as needed.
      },
    ],
  });

 const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
});

  const [chartOptions, setChartOptions] = useState({});


  useEffect(() => {
    fetch("https://mcn0672.uta.cloud/backend/officer_fetch_employee_by_race.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const labels = data.race_counts.map((item) => item.Race);
          const counts = data.race_counts.map((item) => item.employee_count);
          setPieData({
            labels: labels,
            datasets: [
              {
                data: counts,
                // Add your colors here
                backgroundColor: [
                  "#3366cc",
                  "#dc3912",
                  "#ff9900",
                  "#109618",
                  "#990099",
                ],
              },
            ],
          });
        }
      });
    fetch("https://mcn0672.uta.cloud/backend/officer_fetch_employee_by_age.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const labels = Object.keys(data.age_group_counts);
          const counts = Object.values(data.age_group_counts).map(Number);

          setAgeGroupData({
            labels: labels,
            datasets: [
              {
                data: counts,
                // Add your colors here (or any other required dataset properties)
                backgroundColor: [
                  "#3366cc",
                  "#dc3912",
                  "#ff9900",
                  "#109618",
                  "#990099",
                ],
              },
            ],
          });
        }
      });
      const raceColors = {
        'Asian': '#FFC107',
        'Black or African American': '#28A745',
        'American Indian or Alaska Native': '#007BFF',
        'White': '#DC3545',
        'Native Hawaiian or Other Pacific Islander': '#6610F2',
        'Hispanic or Latino': '#E83E8C'
        // Add more colors for any other races if needed.
    };
    fetch("https://mcn0672.uta.cloud/backend/officer_fetch_employee_by_gender.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const labels = data.gender_counts.map((item) => item.Gender);
          const counts = data.gender_counts.map((item) => item.count);

          setGenderData((prevState) => ({
            ...prevState,
            labels: labels,
            datasets: [
              {
                ...prevState.datasets[0],
                data: counts,
              },
            ],
          }));
        }
      });

      fetch("https://mcn0672.uta.cloud/backend/officer_fetch_employee_race_by_department.php")
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
            const departments = [...new Set(data.counts.map(item => item.DepartmentID))];
            const races = [...new Set(data.counts.map(item => item.Race))];
            
            const datasets = races.map(race => {
                const dataForRace = departments.map(department => {
                    const item = data.counts.find(i => i.DepartmentID === department && i.Race === race);
                    return item ? item.count : 0;
                });

                return {
                    label: race,
                    data: dataForRace,
                    backgroundColor: raceColors[race] || '#CCCCCC'  // Default color to light gray if race is not found in raceColors
                };
            });

            setChartData({
                labels: departments,
                datasets: datasets
            });

            setChartOptions({
                scales: {
                    x: {
                        beginAtZero: true,
                        stacked: true,
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true
                    }
                }
            });
        }
      });
  }, []);

  const ageGroupOptions = {
    title: {
      display: true,
      text: "Number of Employees per Age Group",
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Number of Employees",
        },
      },
      y: {
        title: {
          display: true,
          text: "Age Group",
        },
      },
    },
  };

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
          <h1>Diversity Metrics</h1>
          <div className="row">
            <article className="style2">
              <div className="graph-container">
                <div className="graph">
                  <div className="graph-info">
                    <h4 style={{ color: "black" }}>Employee Distribution by Ethnicity</h4>
                  </div>
                  <Pie
                    data={pieData}
                    options={{
                      title: {
                        display: true,
                        text: "Number of Employees Per Race",
                      },
                    }}
                  />
                </div>
              </div>
            </article>
            <article className="style2">
              <div className="graph-container">
                <div className="graph-info">
                  <h4>Employee Demographics by Gender</h4>
                </div>
                <div className="graph">
                  <Pie data={genderData} />
                </div>
              </div>
            </article>
            <article className="style2">
              <div className="graph-container">
                <div className="graph-info">
                  <h4 style={{ color: "black" }}>
                  Employee Count by Age Group
                  </h4>
                </div>
                <div className="graph">
                  <Bar data={ageGroupData} options={ageGroupOptions} />
                </div>
              </div>
            </article>
            
            <article className="style2">
              <div className="graph-container">
                <div className="graph-info">
                  <h4>Department-wise Employee Distribution by Race</h4>
                </div>
                <div className="graph">
                <Bar data={chartData} options={chartOptions} />
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

export default OfficerDiversityMatrics;
