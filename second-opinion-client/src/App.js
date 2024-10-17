import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure Link is imported
import Login from './components/Login';
import Register from './components/Register';
import ReviewUpload from './components/ReviewUpload';
import logo from './logo.svg'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the Second Opinion App!</p>
          
          {/* Navigation Links */}
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/upload">Upload Review</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<ReviewUpload />} />
            <Route path="/" element={<h2>Home Page - Please select a route</h2>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
