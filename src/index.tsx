import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalCSS, ResetCSS } from './styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { Provider } from './components/Context';

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
        <Provider>
          <Route exact path="/" component={Home} />
        </Provider>
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>,
  document.getElementById('app'),
);
