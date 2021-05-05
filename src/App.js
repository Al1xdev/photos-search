import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Favorite from './pages/favorite';
import Home from './pages/home';

import './App.css';


function App() {
  return (
    <div className="container">
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/favorite" component={Favorite} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
