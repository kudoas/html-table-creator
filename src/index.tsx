import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalCSS, ResetCSS } from './styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/ContactForm';
import { Provider } from './components/Context';

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
