import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './TableRow.module.css';
import TableData from './TableData';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tr } = styles;
    const {
      rowData,
      handleClick,
      otherProps,
    } = this.props;

    return (
      <tr className={tr}>
        {rowData.map((data) => (
          <TableData
            key={Math.random()}
            stateObj={this.state}
            data={data}
            handleClick={handleClick}
            otherProps={otherProps}
          />
        ))}
      </tr>
    );
  }
}

TableRow.propTypes = {
  rowData: propTypes.instanceOf(Array).isRequired,
  handleClick: propTypes.func.isRequired,
  otherProps: propTypes.instanceOf(Object).isRequired,
};

export default TableRow;
