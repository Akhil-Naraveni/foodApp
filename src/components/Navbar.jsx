import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Cart from "./Cart";
import Profile from "./Profile";

import "./Navbar.css"

const Navbar = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="navbar">
          <ul className="">
            <li><Link to="/" className="home navitem">Home</Link></li>
            <li><Link to="/about" className="about navitem">About</Link></li>
            <li><Link to="/cart" className="cart navitem">Cart</Link></li>
            <li><Link to="/profile" className="profile navitem">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;

// To get started, you can use this template and expand on it!
// Ideas: Add a SearchBar component, a Category filter, or connect to an API for real recipes!
// What do you think? Anything you'd like to adjust or add? Let's make it happen!
