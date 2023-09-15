import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import IndexFooter from './IndexFooter';
import BarChart from '../charts/BarChart';
import { OfficerDashboardData } from './OfficerDashboardData';

function AdminUserActivity() {

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
									<h1><Link to="/admin_candidates" style={{ color: 'black' }}>Logged In Users</Link></h1>
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
									<h1><Link to="/admin_candidates" style={{ color: 'black' }}>Logged Out Users</Link></h1>
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
									<h1><Link to="/troubleshoot" style={{ color: 'black' }}>Issues Raised</Link></h1>
									<span className="count">54</span>
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

export default AdminUserActivity;

