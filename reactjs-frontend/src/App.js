import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://ansal-sajan-api.contentecho.in/api/messages')
      .then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          setMessage(response.data.data[0].attributes.text);
        } else {
          setError('No message found');
        }
      })
      .catch(error => {
        setError('Error fetching message');
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{error ? error : message}</h1>
      </header>
    </div>
  );
}

export default App;
