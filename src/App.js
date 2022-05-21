import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Annoucements from './pages/Announcements/Announcements';
import Complaints from './pages/Complaints/Complaints';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './pages/Header/Header';
import KYC from './pages/KYC/KYC';
import Memberships from './pages/Memberships/Memberships';
// import Menu from './pages/Menu/Menu';
import Referalls from './pages/Referalls/Referalls';
import Settings from './pages/Settings/Settings';
import Slideshow from './pages/Slideshow/Slideshow';


const App = () => {
  return (
    <Router>
          <Header/>
      <Sidebar />
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/memberships" exact element={<Memberships />} />
          <Route path="/kyc"exact element={<KYC />} />
          <Route path="/slideshow" exact element={<Slideshow />} />
          <Route path="/referalls" exact element={<Referalls />} />
          <Route path="/complaints" exact element={<Complaints />} />
          <Route path='/announcements' exact element={<Annoucements />} />
          <Route path="/settings" exact element={<Settings />} />
          {/* <Route path="/product" element={<Menu />} /> */}
        </Routes> 
    </Router>
  );
};

export default App;