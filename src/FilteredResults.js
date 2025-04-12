import React from 'react';
import getFilteredLayers from './getFilteredLayers';

function FilteredResults({ profile, geojson }) {
  const filtered = getFilteredLayers(profile, geojson);

  if (!filtered || filtered.features.length === 0) {
    return <p style={styles.noMatch}>No matching accommodations found.</p>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Matched Accommodations</h3>
      <ul style={styles.list}>
        {filtered.features.map((feature, index) => {
          const props = feature.properties;
          return (
            <li key={index} style={styles.item}>
              🛏️ <strong>{props.title || props.category}</strong> — Budget: {props.budgetLevel}, Type: {props.sub_category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#eef6fb',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'left',
    marginTop: '2rem',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
    color: '#2c3e50',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  noMatch: {
    marginTop: '1rem',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default FilteredResults;
