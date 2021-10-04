import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../header';

import RouteItem from '../../router/routeItem';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <RouteItem />
      </Router>
    </>
  );
};

export default App;
