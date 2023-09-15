import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateRegister from './pages/CandidateRegister';
import InstituteRegister from './pages/InstituteRegister';
import RecruiterRegister from './pages/RecruiterRegister';
import OfficerRegister from './pages/OfficerRegister';
import AdminRegister from './pages/AdminRegister';
import Contact from './pages/Contact';
import Roles from './pages/Roles';
import Feedback from './pages/Feedback';
import ForgotPassword from './pages/ForgotPassword';
import Troubleshoot from './pages/Troubleshoot';

import CandidateDashboard from './pages/CandidateDashboard';
import CandidateJobApplied from './pages/CandidateJobApplied';
import CandidateJobSearch from './pages/CandidateJobSearch';
import CandidateJobSaved from './pages/CandidateJobSaved';
import CandidateProfile from './pages/CandidateProfile';
import CandidateChat from './pages/CandidateChat';

import OfficerDashboard from './pages/OfficerDashboard';
import OfficerDiversityMatrics from './pages/OfficerDiversityMatrics';
import OfficerAbout from './pages/OfficerAbout';
import OfficerApproval from './pages/OfficerApproval';
import OfficerWorkshop from './pages/OfficerWorkshop';
import OfficerPolicy from './pages/OfficerPolicy';
import OfficerEditPolicies from './pages/OfficerPolicyUpdate';
import OfficerJobMatched from './pages/OfficerJobMatched';
import OfficerCandidates from './pages/OfficerCandidates';
import OfficerRecruiter from './pages/OfficerRecruiter';
import OfficerAddWorkshops from './pages/OfficerAddWorkshops';
import OfficerProfile from './pages/OfficerProfile';
import OfficerChat from './pages/OfficerChat';
import PositionDetail from './pages/PositionDetail';

import AdminDashboard from './pages/AdminDashboard';
import AdminJobPosted from './pages/AdminJobPosted';
import AdminApplicationStatus from './pages/AdminApplicationStatus';
import AdminApplicationMatches from './pages/AdminApplicationMatches';
import AdminCandidates from './pages/AdminCandidates';
import AdminInstitution from './pages/AdminInstitution';
import AdminRecruiter from './pages/AdminRecruiter';
import AdminDeiOfficer from './pages/AdminDeiOfficer';
import AdminUserRegistrations from './pages/AdminUserRegistrations';
import AdminUserActivity from './pages/AdminUserActivity';
import AdminProfile from './pages/AdminProfile';

import RecruiterDashboard from './pages/RecruiterDashboard';
import RecruiterJobPosted from './pages/RecruiterJobPosted';
import RecruiterApplied from './pages/RecruiterApplied';
import RecruiterApplicationStatus from './pages/RecruiterApplicationStatus';
import RecruiterMatching from './pages/RecruiterMatching';
import RecruiterUserRegistrations from './pages/RecruiterUserRegistrations';
import RecruiterAbout from './pages/RecruiterAbout';
import RecruiterSetupInterview from './pages/RecruiterSetupInterview';
import RecruiterProfile from './pages/RecruiterProfile';
import RecruiterChat from './pages/RecruiterChat';

import InstituteDashboard from './pages/InstituteDashboard';
import InstituteJobPosted from './pages/InstituteJobPosted';
import InstituteApplicationStatus from './pages/InstituteApplicationStatus';
import InstituteCandidatesInterested from './pages/InstituteCandidatesInterested';
import InstituteRecruiter from './pages/InstituteRecruiter';
import InstituteFaculty from './pages/InstituteFaculty';
import InstituteResearch from './pages/InstituteResearch';
import InstituteAbout from './pages/InstituteAbout';
import InstituteProfile from './pages/InstituteProfile';
import InstituteEditProfile from './pages/InstituteEditProfile';
import InstituteChat from './pages/InstituteChat';
import InstituteAddJob from './pages/InstituteAddJob';
import InstituteEditJob from './pages/InstituteEditJob';


import Blog from './pages/Blog';
import RegisterEmailVerification from './pages/RegisterEmailVerification';
import Logout from './pages/Logout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const loggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/candidate_register" element={<CandidateRegister />} />
          <Route path="/institute_register" element={<InstituteRegister />} />
          <Route path="/recruiter_register" element={<RecruiterRegister />} />
          <Route path="/officer_register" element={<OfficerRegister />} />
          <Route path="/admin_register" element={<AdminRegister />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/troubleshoot" element={<Troubleshoot />} />

          {/* Candidate Routes */}
          <Route path="/candidate_dashboard" element={<CandidateDashboard />} />
          <Route path="/candidate_jobsearch" element={<CandidateJobSearch />} />
          <Route path="/candidate_jobapplied" element={<CandidateJobApplied />} />
          <Route path="/candidate_jobsaved" element={<CandidateJobSaved />} />
          <Route path="/candidate_profile" element={<CandidateProfile />} />
          <Route path="/candidate_chat" element={<CandidateChat />} />

          {/* Officer Routes */}
          <Route path="/officer_dashboard" element={<OfficerDashboard />} />
          <Route path="/officer_about" element={<OfficerAbout />} />
          <Route path="/officer_job_approval" element={<OfficerApproval />} />
          <Route path="/officer_workshops" element={<OfficerWorkshop />} />
          <Route path="/officer_policy_review" element={<OfficerPolicy />} />
          <Route path="/officer_policy_update" element={<OfficerEditPolicies />} />
          <Route path="/officer_jobmatched" element={<OfficerJobMatched />} />
          <Route path="/officer_candidates" element={<OfficerCandidates />} />
          <Route path="/officer_recruiter" element={<OfficerRecruiter />} />
          <Route path="/officer_add_workshop" element={<OfficerAddWorkshops />} />
          <Route path="/officer_profile" element={<OfficerProfile />} />
          <Route path="/officer_chat" element={<OfficerChat />} />
          <Route path="/position-detail/:positionId" element={<PositionDetail />} />
          <Route path="/officer_diversity_matrics" element={<OfficerDiversityMatrics />} />
          

          {/* Admin Routes */}
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_jobposted" element={<AdminJobPosted />} />
          <Route path="/admin_application_status" element={<AdminApplicationStatus />} />
          <Route path="/admin_application_matches" element={<AdminApplicationMatches />} />
          <Route path="/admin_candidates" element={<AdminCandidates />} />
          <Route path="/admin_institution" element={<AdminInstitution />} />
          <Route path="/admin_recruiter" element={<AdminRecruiter />} />
          <Route path="/admin_dei_officer" element={<AdminDeiOfficer />} />
          <Route path="/admin_user_registrations" element={<AdminUserRegistrations />} />
          <Route path="/admin_user_activity" element={<AdminUserActivity />} />
          <Route path="/admin_profile" element={<AdminProfile />} />

          {/* Recruiter Routes */}
          <Route path="/recruiter_dashboard" element={<RecruiterDashboard />} />
          <Route path="/recruiter_jobposted" element={<RecruiterJobPosted />} />
          <Route path="/recruiter_applied" element={<RecruiterApplied />} />
          <Route path="/recruiter_application_status" element={<RecruiterApplicationStatus />} />
          <Route path="/recruiter_matching" element={<RecruiterMatching />} />
          <Route path="/recruiter_user_registrations" element={<RecruiterUserRegistrations />} />
          <Route path="/recruiter_about" element={<RecruiterAbout />} />
          <Route path="/recruiter_setup_interview" element={<RecruiterSetupInterview />} />
          <Route path="/recruiter_profile" element={<RecruiterProfile />} />
          <Route path="/recruiter_chat" element={<RecruiterChat />} />

          {/* Institute Routes */}
          <Route path="/institute_dashboard" element={<InstituteDashboard />} />
          <Route path="/institute_jobposted" element={<InstituteJobPosted />} />
          <Route path="/institute_application_status" element={<InstituteApplicationStatus />} />
          <Route path="/institute_candidates_interested" element={<InstituteCandidatesInterested />} />
          <Route path="/institute_recruiter" element={<InstituteRecruiter />} />
          <Route path="/institute_faculty" element={<InstituteFaculty />} />
          <Route path="/institute_research" element={<InstituteResearch />} />
          <Route path="/institute_about" element={<InstituteAbout />} />
          <Route path="/institute_edit_profile" element={<InstituteEditProfile />} />
          <Route path="/institute_profile" element={<InstituteProfile />} />
          <Route path="/institute_chat" element={<InstituteChat />} />
          <Route path="/institute_add_job" element={<InstituteAddJob />} />
          <Route path="/institute_edit_job" element={<InstituteEditJob />} />


          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />


          {/* Email Verification Routes */}
          <Route path="/register_email_verification" element={<RegisterEmailVerification />} />


          {/* Logout Routes */}
          <Route path="/logout" element={<Logout />} />


          {/* LoggedIn Routing Dashboard Pages */}
          if(userType == "candidate"){
            <Route path="/candidate_dashboard" exact component={loggedIn ? <CandidateDashboard /> : <Login />} />
          }
          else if(userType == "institute"){
            <Route path="/institute_dashboard" element={loggedIn ? <InstituteDashboard /> : <Login />} />
          }
          else if(userType == "recruiter"){
            <Route path="/recruiter_dashboard" element={loggedIn ? <RecruiterDashboard /> : <Login />} />
          }
          else if(userType == "officer"){
            <Route path="/officer_dashboard" element={loggedIn ? <OfficerDashboard /> : <Login />} />
          }
          else if(userType == "admin"){
            <Route path="/admin_dashboard" element={loggedIn ? <AdminDashboard /> : <Login />} />
          }
          else{
            <Route path="/login" element={<Login />} />
          }
        </Routes>
      </Router>
      {/* <Index />
      <Contact /> */}
    </div>
  );
}

export default App;