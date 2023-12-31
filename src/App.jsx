import { useState } from 'react'
import './App.css'
import Home from './pages/home';
import Project from './pages/project';
import Contact from './pages/contact';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';

const App = () => (
  <Router>
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
);

export default App;
