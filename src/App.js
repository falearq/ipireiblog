import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Post from './components/ArticlesPreview/post';

function App() {
  return (
    <Router>
     <Switch> 
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
   
      </div>
      </Switch>
    </Router>
  );
}

export default App;
