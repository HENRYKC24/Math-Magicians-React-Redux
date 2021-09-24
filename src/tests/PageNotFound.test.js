import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from '../pages/PageNotFound';

it('PageNotFound page renders the UI as expected', () => {
  const tree = renderer.create(<PageNotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
