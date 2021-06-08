import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Favorite from './pages/favorite';
import Home from './pages/home';
import History from './pages/history';

import './App.css';

function App() {
  const [favorit, setFavorit] = useState([]);
  const [search, setSearch] = useState('');
  const [historyItems, setHistoryItems] = useState([]);

  return (
    <div className="container">
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  favorit={favorit}
                  setFavorit={setFavorit}
                  search={search}
                  setSearch={setSearch}
                  historyItems={historyItems}
                  setHistoryItems={setHistoryItems}
                />
              )}
            />
            <Route
              exact
              path="/favorit"
              render={() => <Favorite favorit={favorit} setFavorit={setFavorit} />}
            />
            <Route exact path="/history" render={() => <History search={search} historyItems={historyItems}/>} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
