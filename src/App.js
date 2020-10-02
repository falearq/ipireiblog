import React from 'react';
import './App.css';
// import ArticlesPreview from './components/ArticlesPreview'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing'


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Landing /> 
    </div>
  );
}

export default App;
