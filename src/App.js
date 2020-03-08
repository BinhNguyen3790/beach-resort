import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="alert alert-info" role="alert">
      <h1 className="red">Beach Resort</h1>
      </div>
    </div>
  );
}

export default App;
