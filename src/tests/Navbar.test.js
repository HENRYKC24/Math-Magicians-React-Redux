import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('Navbar renders the UI as expected', () => {
  const tree = renderer.create(<Router>
    <Navbar />
  </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
