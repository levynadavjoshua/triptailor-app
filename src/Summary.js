import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import analyzeAnswers from './analyzeAnswers';

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};
  const profile = analyzeAnswers(answers);

  if (!profile) {
    return <p style={styles.error}>Unable to generate profile summary. Please try again.</p>;
  }

  const handleShowResults = () => {
    navigate('/results', { state: { profile } });
  };

  return (
    <div style={styles.container}>
      <h2>Thank you for your answers!</h2>
      <p style={styles.sub}>Here’s a summary of what you shared:</p>

      <div style={styles.summaryBox} aria-label="Your Answers">
        {Object.entries(answers).map(([key, value]) => (
          <div key={key} style={styles.row}>
            <strong>{key}:</strong> <span>{Array.isArray(value) ? value.join(', ') : value}</span>
          </div>
        ))}
      </div>

      <h3 style={styles.sectionHeader}>Profile Tags:</h3>
      <ul style={styles.list} aria-label="Profile Tags">
        {profile.tags.map((tag, index) => (
          <li key={index} style={styles.listItem}>✔️ {tag}</li>
        ))}
      </ul>

      <h3 style={styles.sectionHeader}>Preferences:</h3>
      <ul style={styles.list} aria-label="User Preferences">
        {Object.entries(profile.preferences).map(([key, value], index) => (
          <li key={index} style={styles.listItem}>
            <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
          </li>
        ))}
      </ul>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => navigate('/')}>
          Back to Home
        </button>
        <button
          style={{ ...styles.button, backgroundColor: '#2ecc71', marginLeft: '1rem' }}
          onClick={handleShowResults}
        >
          Show My Recommendations
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  sub: {
    marginBottom: '1.5rem',
    color: '#555',
    fontSize: '1.1rem',
  },
  summaryBox: {
    backgroundColor: '#f0f0f0',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  sectionHeader: {
    marginTop: '2rem',
    marginBottom: '1rem',
    fontSize: '1.2rem',
    color: '#2c3e50',
  },
  row: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },
  list: {
    textAlign: 'left',
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem',
  },
  listItem: {
    fontSize: '1.05rem',
    marginBottom: '0.75rem',
  },
  button: {
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: '1.2rem',
    marginTop: '3rem',
  },
};

export default Summary;
