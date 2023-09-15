import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';
import BarChart from '../charts/BarChart';
import { OfficerDashboardData } from './OfficerDashboardData';

function AdminDashboard() {

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
					<h1>Admin Dashboard</h1>
					<AdminHeader />
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
									<h1><Link to="/admin_jobposted" style={{ color: 'black' }}>Jobs</Link></h1>
									<span className="count">54</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						
						
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/admin_candidates" style={{ color: 'black' }}>Candidates</Link></h1>
									<span className="count">786</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/admin_institution" style={{ color: 'black' }}>Institutes</Link></h1>
									<span className="count">228</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/admin_recruiter" style={{ color: 'black' }}>Recruiters</Link></h1>
									<span className="count">55</span>
								</div>
								<div className="graph">
									<BarChart chartData={officerDashboardData} />
								</div>
							</div>
						</article>
						<article className="style1">
							<div className="graph-container">
								<div className="graph-info">
									<h1><Link to="/admin_dei_officer" style={{ color: 'black' }}>DEI Officers</Link></h1>
									<span className="count">12</span>
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

export default AdminDashboard;

