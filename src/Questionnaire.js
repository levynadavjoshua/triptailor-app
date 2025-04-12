import React, { useState } from 'react';
import questions from './questions';
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const currentQuestion = questions[step];

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: e.target.value,
    });
  };

  const handleNext = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.required && (!answer || answer.trim() === '')) {
      alert('This question is required');
      return;
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/summary', { state: { answers } });
    }
  };

  return (
    <div style={styles.container}>
      <h2>Personalized Trip Questionnaire</h2>
      <p style={styles.question}>{currentQuestion.question}</p>

      {currentQuestion.type === 'select' ? (
        <select
          value={answers[currentQuestion.id] || ''}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select an option</option>
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={currentQuestion.type}
          placeholder={currentQuestion.placeholder}
          value={answers[currentQuestion.id] || ''}
          onChange={handleChange}
          style={styles.input}
        />
      )}

      <button onClick={handleNext} style={styles.button}>
        {step === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto',
  },
  question: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '1.5rem',
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

export default Questionnaire;
