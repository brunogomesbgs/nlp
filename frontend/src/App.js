import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [accuracy, setAccuracy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/analyze/{text}', {
        "text": question,
      });
      setAnswer(response.data[0].label);
      setAccuracy(response.data[0].score);
    } catch (error) {
      console.error('Error for the response:', error);
    }
  };

  return (
    <div className="App">
      <h1>Sentiment analyzes on a text</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit">Analyze!</button>
      </form>
      {answer && (
        <div>
          <h2>Sentiment:</h2>
          <p>{answer}</p>
        </div>
      )}
      {accuracy && (
          <div>
            <h2>Confidence:</h2>
            <p>{accuracy}</p>
          </div>
      )}
    </div>
  );
}

export default App;
