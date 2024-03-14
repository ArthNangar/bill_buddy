import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Index.css'; // Import the CSS file for styling

const Index = () => {
  return (
    <>
      <Header />
      <div className="index-container">
      <div className="index-content">
        <h1 className="index-title">Welcome to Your Pending Invoice Tracker</h1>
        <p className="index-description">Stay organized and never miss a payment again with our Invoice tracker.</p>
        <div className="index-buttons">
          <Link to="/home" className="index-link">
            <button className="index-button">Go to Dashboard</button>
          </Link>
          <Link to="/register" className="index-link">
            <button className="index-button">Sign Up</button>
          </Link>
          <Link to="/login" className="index-link">
            <button className="index-button">Log In</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;
