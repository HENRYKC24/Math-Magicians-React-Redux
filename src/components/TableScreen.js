import propTypes from 'prop-types';
import React from 'react';

const TableScreen = ({ data }) => <span>{data}</span>;

TableScreen.propTypes = {
  data: propTypes.oneOfType([propTypes.string, propTypes.any]),
};

TableScreen.defaultProps = {
  data: '',
};

export default TableScreen;
