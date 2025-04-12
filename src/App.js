import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Questionnaire from './Questionnaire';
import Summary from './Summary';
import FilteredResults from './FilteredResults';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/results" element={<FilteredResults />} />
      </Routes>
    </Router>
  );
}

export default App;
