import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import analyzeAnswers from './analyzeAnswers';

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  const analysis = analyzeAnswers(answers);

  return (
    <div style={styles.container}>
      <h2>Thank you for your answers!</h2>
      <p style={styles.sub}>Here’s a summary of what you shared:</p>

      <div style={styles.summaryBox}>
        {Object.entries(answers).map(([key, value]) => (
          <div key={key} style={styles.row}>
            <strong>{key}:</strong> <span>{value}</span>
          </div>
        ))}
      </div>

      <h3 style={styles.sub}>Profile Insights:</h3>
      <ul style={styles.list}>
        {analysis.tags.map((tag, index) => (
          <li key={index} style={styles.listItem}>✔️ {tag}</li>
        ))}
      </ul>

      <button style={styles.button} onClick={() => navigate('/')}>
        Back to Home
      </button>
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
};

export default Summary;
