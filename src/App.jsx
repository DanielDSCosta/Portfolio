import { useState } from 'react'
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';





const App = () => (

  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
 
);

export default App;
