import React from 'react';
import propTypes from 'prop-types';
import TableData from './TableData';

const TableRow = ({ rowData, handleClick, otherProps }) => (
  <tr className="tr">
    {rowData.map((data) => (
      <TableData
        key={Math.random()}
        data={data}
        handleClick={handleClick}
        otherProps={otherProps}
      />
    ))}
  </tr>
);

TableRow.propTypes = {
  rowData: propTypes.instanceOf(Array).isRequired,
  handleClick: propTypes.func.isRequired,
  otherProps: propTypes.instanceOf(Object).isRequired,
};

export default TableRow;
