import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { table } from './Table.module.css';

const Table = ({ tableData, handleClick, otherProps }) => (
  <table className={table}>
    <tbody>
      {tableData.map((rowData) => (
        <TableRow
          key={Math.random()}
          handleClick={handleClick}
          rowData={rowData}
          otherProps={otherProps}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  otherProps: PropTypes.instanceOf(Object).isRequired,
};

export default Table;
