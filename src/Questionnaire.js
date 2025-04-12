import React from 'react';

function Questionnaire() {
  return (
    <div style={styles.container}>
      <h2>Personalized Trip Questionnaire</h2>
      <p>Here will be the personalized travel questions ✨</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
  },
};

export default Questionnaire;
