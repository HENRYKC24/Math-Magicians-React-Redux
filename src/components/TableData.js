import React from 'react';
import propTypes from 'prop-types';
// import TableScreen from './TableScreen';

const TableData = ({
  data,
  handleClick,
  otherProps: { next, operation, total },
}) => {
  const validateClass = (char) => {
    const invalidChar = [
      '÷',
      '-',
      '+',
      '%',
      '+/-',
      '=',
      '.',
    ];
    const substituteChar = [
      'Divide',
      'Subtract',
      'Add',
      'Modulus',
      'PlusMinus',
      'Equal',
      'Dot',
    ];
    if (!invalidChar.includes(char)) {
      return char;
    }
    return substituteChar[invalidChar.indexOf(char)];
  };
  if (data === 0) {
    return (
      <td className="td">
        <div>
          <span className="result">
            {`${total === 0 || !!total ? total : ''}${
              operation === 0 || !!operation ? operation : ''
            }${next === 0 || !!next ? next : ''}`}
          </span>
        </div>
      </td>
    );
  }
  return (
    <td className="td">
      <div className={`div${validateClass(data)}`} aria-hidden onClick={() => handleClick(data)}>
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
