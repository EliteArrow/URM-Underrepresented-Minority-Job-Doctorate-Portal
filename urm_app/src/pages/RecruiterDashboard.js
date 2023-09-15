import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';
import BarChart from '../charts/BarChart';
import { OfficerDashboardData } from './OfficerDashboardData';

function RecruiterDashboard() {

	const [officerDashboardData, setOfficerDashboardData] = useState({
		labels: OfficerDashboardData.map((data) => data.Race),
		datasets: [{
			label: "Students",
			data: OfficerDashboardData.map((data) => data.Candidates),

		}]
	})


	return (
		<Fragment>
			<header>
				<div className="header-container">
					<h1>Recruiter Dashboard</h1>
					<RecruiterHeader />
					<img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
				</div>
			</header>

			<main>
				{/* <!-- Dahsboard Content --> */}
				<section id="dashboard">
					<div className="row">
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/recruiter_jobposted" style={{ color: 'black' }}>Jobs Posted</Link></h1>
									<span className="count">450</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/recruiter_applied" style={{ color: 'black' }}>Jobs Applied</Link></h1>
									<span className="count">336</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/recruiter_application_status" style={{ color: 'black' }}>Application Status</Link></h1>
									<span className="count">6</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/recruiter_matching" style={{ color: 'black' }}>Matched Candidates</Link></h1>
									<span className="count">786</span>
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
	)

}

export default RecruiterDashboard;

