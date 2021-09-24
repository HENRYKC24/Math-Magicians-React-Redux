import React from 'react';
import rederer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Calculator renders UI as expected', () => {
  const tree = rederer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
