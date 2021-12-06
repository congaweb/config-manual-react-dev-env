import React from 'react';

// App component
export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <h1>{greetingMessage}</h1>
    </div>
  );
}
