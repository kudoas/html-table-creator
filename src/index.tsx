import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { GlobalCSS, ResetCSS } from './styles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TableContainer from './hooks/useNewTable';

// assets
import './assets/img/favicon.ico';
import './assets/img/favicon-16×16.png';
import './assets/img/favicon-32×32.png';
import './assets/img/html-table-creator.png';

ReactDOM.render(
  <>
    <ResetCSS />
    <GlobalCSS />
    <Router>
      <Switch>
        <TableContainer.Provider>
          <Route exact path="/" component={Home} />
        </TableContainer.Provider>
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>,
  document.getElementById('app'),
);
