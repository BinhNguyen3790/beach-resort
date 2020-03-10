import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import { Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/single-room' component={SingleRoom}/>
    </div>
  );
}

export default App;
