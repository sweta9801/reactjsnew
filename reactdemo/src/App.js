import React from 'react';
import './App.css';
import HomeContainers from './containers/HomeContainers';
import HeaderContainers from './containers/HeaderContainers';

function App() {
  return (
    <div className="App">
    <HeaderContainers />
    <HomeContainers />
    </div>
  );
}

export default App;
