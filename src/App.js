import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Post from './components/ArticlesPreview/post';
import MisionVision from './pages/MisionVision'
import QuienesSomos from './pages/QuienesSomos';
import Agenda2030 from './pages/Agenda2030';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar/Navbar';
import Footers from './components/footer/footer';
import Notirei from './components/notirei/Notirei';
import Hablemosde from './components/hablemosde/Hablemosde';


function App() {
  return (
    <Router>
      <Navbar/>
     <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/quienes-somos" component={QuienesSomos} />
      <Route exact path="/mision-vision" component={MisionVision} />
      <Route exact path="/agenda-2030" component={Agenda2030} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/notirei" component={Notirei} />
      <Route exact path="/hablemosde" component={Hablemosde} />
      <Route path="/post/:id" component={Post} />
      </Switch>
      <Footers/>
    </Router>
  );
}

export default App;
