import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './Table.module.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { table } = styles;
    const { tableData } = this.props;
    return (
      <table className={table}>
        <tbody>
          {tableData.map((rowData, ind) => {
            if (ind === 0) {
              return <TableRow key={Math.random()} isFirst rowData={rowData} />;
            }
            return <TableRow key={Math.random()} isFirst={false} rowData={rowData} />;
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
};

export default Table;
