import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
