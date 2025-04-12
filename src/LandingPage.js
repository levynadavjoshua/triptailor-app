import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/questionnaire');
  };

  return (
    <div className="hero">
      <div className="content">
        <h1>
          Welcome to <span style={{ color: '#3498db' }}>TripTailor</span>
        </h1>
        <p>
          At TripTailor, we make discovery exciting and personal.{"\n"}
          By blending technology with local wisdom, our platform delivers tailored
          recommendations that match your interests, helping you explore the world
          in a way that feels made just for you.
        </p>
        <button onClick={handleStart}>Let’s Get Started</button>

        <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          <h2 style={{ color: '#2c3e50' }}>How It Works</h2>
          <ol style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
            <li>
              <strong>Answer a few quick questions</strong> – So we understand your travel style.
            </li>
            <li>
              <strong>We analyze your preferences</strong> – Using smart filtering and personal tags.
            </li>
            <li>
              <strong>You get a map of curated recommendations</strong> – Completely tailored to you.
            </li>
            <li>
              <strong>Soon:</strong> Dynamic maps, AI-based matching, and local tips — just for you.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
