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
    const { isFirst, rowData } = this.props;
    return (
      <tr className={tr}>
        {rowData.map((data, ind) => {
          if (ind === 0 && isFirst) {
            return <TableData key={Math.random()} isFirst={isFirst} data={data} />;
          }
          return <TableData key={Math.random()} isFirst={false} data={data} />;
        })}
      </tr>
    );
  }
}

TableRow.propTypes = {
  rowData: propTypes.instanceOf(Array).isRequired,
  isFirst: propTypes.bool.isRequired,
};

export default TableRow;
