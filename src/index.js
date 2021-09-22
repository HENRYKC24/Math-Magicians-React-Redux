import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
