import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CalculatorPage from './CalculatorPage';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import QuotesPage from './QuotesPage';
import PageNotFound from './PageNotFound';

const AppRoutes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/calculator">
        <CalculatorPage />
      </Route>
      <Route path="/quotes">
        <QuotesPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </>
);

export default AppRoutes;
