import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalCSS, ResetCSS } from './styles';
import Home from './pages/Home';
import Contact from './pages/Contact';

// assets
import './assets/img/favicon.ico';
import './assets/img/favicon-16×16.png';
import './assets/img/favicon-32×32.png';
import './assets/img/html-table-creator.png';

const root = createRoot(document.getElementById('app'));
root.render(
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
);
