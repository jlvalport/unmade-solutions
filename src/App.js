import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route path='/' exact component={LandingPage} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
