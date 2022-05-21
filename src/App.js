import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Annoucements from "./pages/Announcements/Announcements";
import Complaints from "./pages/Complaints/Complaints";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./pages/Header/Header";
import KYC from "./pages/KYC/KYC";
import Notifications from './pages/Notifications/Notifications'
import Memberships from "./pages/Memberships/Memberships";
import Referalls from "./pages/Referalls/Referalls";
import Settings from "./pages/Settings/Settings";
import Slideshow from "./pages/Slideshow/Slideshow";

const App = () => {
  return (
    <Router>
     <div className="main_header">
     <Header />
     </div>
      <div className="main_container">
        <div className="leftSide">
          <Sidebar />
        </div>
        <div className="rightSide">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/slideshow" element={<Slideshow />} />
            <Route path="/referalls" element={<Referalls />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/announcements" element={<Annoucements />} />
            
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
