import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Table from './Table';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (data) => {
    setState((obj) => {
      const newObject = calculate(state, data);
      return {
        ...obj,
        ...newObject,
      };
    });
  };

  const tableData = [
    [0],
    ['AC', '+/-', '%', `${String.fromCharCode(247)}`],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <Table otherProps={state} handleClick={handleClick} tableData={tableData} />
  );
};

export default Calculator;
