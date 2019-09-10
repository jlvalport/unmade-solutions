import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Layout from './containers/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import DevServicePage from './components/DevServicePage/DevServicePage';
import MarketingServicePage from './components/MarketingServicePage/MarketingServicePage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <Layout>
      <Route path='/' exact component={LandingPage} />
      <Route path='/servicio-de-desarrollo-web' exact component={DevServicePage} />
      <Route path='/servicio-de-marketing' exact component={MarketingServicePage} />
      <Route path='/acerca-de-nosotros' exact component={AboutUsPage} />
      <Route path='/contacto' exact component={ContactUsPage} />
      <Route path='/404' exact component={Page404} />
    </Layout>
  );
}

export default App;
