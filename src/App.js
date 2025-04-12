body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to bottom right, #e8f1f2, #d0e4f7);
  color: #2c3e50;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  animation: fadeIn 1s ease-in;
}

.content {
  max-width: 700px;
  background-color: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #2980b9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
