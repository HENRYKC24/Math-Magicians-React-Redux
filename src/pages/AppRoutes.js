import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CalculatorPage from './CalculatorPage';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import QuotesPage from './QuotesPage';
import PageNotFound from './PageNotFound';
import Footer from '../components/Footer';

const AppRoutes = () => (
  <div className="main">
    <section>
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
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default AppRoutes;
