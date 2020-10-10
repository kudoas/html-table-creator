import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { GlobalCSS, ResetCSS } from './styles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Provider } from './components/Context';

// assets
import './assets/img/favicon.ico';
import './assets/img/favicon-16×16.png';
import './assets/img/favicon-32×32.png';
import './assets/img/html-table-creator.png';

ReactDOM.render(
  <Provider>
    <ResetCSS />
    <GlobalCSS />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
