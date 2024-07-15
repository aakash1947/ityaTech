// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Only if using React Router
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Blog from './Component/Blog.jsx';
import Skills from './Component/Skills.jsx';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
};

// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

export default App;
