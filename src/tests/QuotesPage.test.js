import React from 'react';
import renderer from 'react-test-renderer';
import QuotesPage from '../pages/QuotesPage';

it('Quotes page renders the UI as expected', () => {
  const tree = renderer.create(<QuotesPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
