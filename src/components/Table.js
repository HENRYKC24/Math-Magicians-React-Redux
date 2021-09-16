import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './Table.module.css';

const Table = (props) => {
  const { table } = styles;
  const { tableData, handleClick, otherProps } = props;

  return (
    <table className={table}>
      <tbody>
        {tableData.map((rowData, ind) => {
          if (ind === 0) {
            return (
              <TableRow
                key={Math.random()}
                handleClick={handleClick}
                rowData={rowData}
                otherProps={otherProps}
              />
            );
          }
          return (
            <TableRow
              key={Math.random()}
              handleClick={handleClick}
              rowData={rowData}
              otherProps={otherProps}
            />
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  otherProps: PropTypes.instanceOf(Object).isRequired,
};

export default Table;
