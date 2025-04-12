import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getFilteredLayers from './getFilteredLayers';

function FilteredResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = location.state?.profile;

  const [layers, setLayers] = useState(null);

  useEffect(() => {
    if (profile) {
      getFilteredLayers(profile).then(setLayers);
    }
  }, [profile]);

  if (!profile) {
    return (
      <div style={styles.container}>
        <p style={styles.error}>No profile data found. Please complete the questionnaire first.</p>
        <button onClick={() => navigate('/questionnaire')} style={styles.button}>Go to Questionnaire</button>
      </div>
    );
  }

  if (!layers) {
    return <p style={styles.loading}>Loading your personalized recommendations...</p>;
  }

  if (layers.length === 0) {
    return <p style={styles.noMatch}>No matching results found for your preferences.</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Personalized Recommendations</h2>
      <p style={styles.sub}>
        Based on your preferences, we’ve selected these places that best match your travel style.
      </p>

      <ul style={styles.list}>
        {layers.map((item, index) => (
          <li key={index} style={styles.item}>
            <strong>{item.title || item.category}</strong><br />
            <em>{item.description}</em><br />
            <small>
              Source: <strong>{item.source_table}</strong> | Budget: {item.budget_level}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.8rem',
    color: '#2c3e50',
  },
  sub: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    color: '#555',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f4f9fc',
    borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
  },
  loading: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '2rem',
  },
  noMatch: {
    textAlign: 'center',
    color: '#999',
    marginTop: '2rem',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default FilteredResults;
