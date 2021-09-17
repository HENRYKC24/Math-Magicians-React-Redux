import React from 'react';
import propTypes from 'prop-types';
import { td } from './TableData.module.css';
import TableScreen from './TableScreen';

const TableData = ({
  data,
  handleClick,
  otherProps: { next, operation, total },
}) => {
  const mapArray = [total, operation, next];
  return data === 0 ? (
    <td className={td}>
      <div>
        {mapArray.map((data) => (
          <TableScreen key={Math.random()} data={data} />
        ))}
      </div>
    </td>
  ) : (
    <td className={td}>
      <div aria-hidden onClick={() => handleClick(data)}>
        {data}
      </div>
    </td>
  );
};

TableData.propTypes = {
  data: propTypes.oneOfType([propTypes.string, propTypes.number]),
  handleClick: propTypes.func.isRequired,
  otherProps: propTypes.instanceOf(Object).isRequired,
};

TableData.defaultProps = {
  data: '0',
};

export default TableData;
