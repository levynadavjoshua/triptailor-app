import React from 'react';
import './App.css';

function App() {
  const handleStart = () => {
    alert("Redirecting to questionnaire...");
    // בהמשך נחליף לניווט אמיתי
  };

  return (
    <div className="hero">
      <div className="content">
        <h1>TripTailor</h1>
        <p>
          At TripTailor, we make discovery exciting and personal.<br />
          By blending technology with local wisdom, our platform<br />
          delivers tailored recommendations that match your interests,<br />
          helping you explore the world in a way that feels made just for you.
        </p>
        <button onClick={handleStart}>Let’s Get Started</button>
      </div>
    </div>
  );
}

export default App;
