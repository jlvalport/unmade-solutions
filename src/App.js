import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import DevServicePage from './components/DevServicePage/DevServicePage';
import MarketingServicePage from './components/MarketingServicePage/MarketingServicePage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route path='/' exact component={LandingPage} />
      <Route path='/servicio-de-desarrollo-web' exact component={DevServicePage} />
      <Route path='/servicio-de-marketing' exact component={MarketingServicePage} />
      <Route path='/acerca-de-nosotros' exact component={AboutUsPage} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
