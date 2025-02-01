import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css"
// Sample pages
const Home = () => (
    <div className="maindiv">
    <h1 className="heading"> Home</h1>
    <p className="para">Come lets dive into out tasty journey..</p>
  </div>
);

const About = () => (
  <div className="maindiv">
    <h1 className="heading">About Us</h1>
    <p className="para">Learn more about our mission and values.</p>
  </div>
);

const Cart = () => (
  <div className="maindiv">
    <h1 className="heading">Your Cart</h1>
    <p className="para">Here are the items you've added to your cart.</p>
  </div>
);

const Profile = () => (
  <div className="maindiv">
    <h1 className="heading">Your Profile</h1>
    <p className="para">Manage your account details here.</p>
  </div>
);

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
          <Route path="/" element={<Home />} />
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
