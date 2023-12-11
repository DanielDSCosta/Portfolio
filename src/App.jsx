import { useState } from 'react'
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';





const App = () => (

  <Router>
    <div class="header">
      <Header/>
      </div>
      <div>


      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <Footer/>
    </div>
  </Router>
 
);

export default App;
