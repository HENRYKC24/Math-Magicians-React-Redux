import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Calculator2 from './Calculator2';
import Navbar from '../components/Navbar';
import Home from './Home';
import Quotes from './Quotes';
import PageNotFound from './PageNotFound';

const AppRoutes = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator2 />
      </Route>
      <Route path="/quotes">
        <Quotes />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </>
);

export default AppRoutes;
