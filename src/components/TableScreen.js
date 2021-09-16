import propTypes from 'prop-types';
import React from 'react';

const TableScreen = (props) => {
  const { data } = props;
  return <span>{data}</span>;
};

TableScreen.propTypes = {
  data: propTypes.string.isRequired,
};

export default TableScreen;
