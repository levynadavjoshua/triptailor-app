import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Questionnaire from './Questionnaire';
import './App.css';
import Summary from './Summary'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/summary" element={<Summary />} />

      </Routes>
    </Router>
  );
}

export default App;
