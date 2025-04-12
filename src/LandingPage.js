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
        <h1>TripTailor</h1>
        <p>
          At TripTailor, we make discovery exciting and personal.
          By blending technology with local wisdom, our platform delivers tailored
          recommendations that match your interests, helping you explore the world
          in a way that feels made just for you.
        </p>
        <button onClick={handleStart}>Let’s Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;
