import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalCSS, ResetCSS } from './styles';
import Home from './pages/Home';
import Contact from './pages/Contact';

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
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Navigate replace to="/" />
    </Router>
  </>,
  document.getElementById('app'),
);
