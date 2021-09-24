import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../pages/HomePage';

it('Home page renders the UI as expected', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
