import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Favorite from './pages/favorite';
import Home from './pages/home';

import './App.css';

function App() {
  const [favorit, setFavorit] = useState([]);

  return (
    <div className="container">
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home favorit={favorit} setFavorit={setFavorit} />} />
            <Route exact path="/favorite" render={() => <Favorite favorit={favorit} />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
