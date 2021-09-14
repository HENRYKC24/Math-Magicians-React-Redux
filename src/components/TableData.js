import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './tableData.module.css';

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { td } = styles;
    const { data } = this.props;
    return <td className={td}>{data}</td>;
  }
}

TableData.propTypes = {
  data: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

TableData.defaultProps = {
  data: '0',
};

export default TableData;
