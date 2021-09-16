import React from 'react';
import propTypes from 'prop-types';
import styles from './TableRow.module.css';
import TableData from './TableData';

const TableRow = (props) => {
  const { tr } = styles;
  const { rowData, handleClick, otherProps } = props;

  return (
    <tr className={tr}>
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
};

TableRow.propTypes = {
  rowData: propTypes.instanceOf(Array).isRequired,
  handleClick: propTypes.func.isRequired,
  otherProps: propTypes.instanceOf(Object).isRequired,
};

export default TableRow;
