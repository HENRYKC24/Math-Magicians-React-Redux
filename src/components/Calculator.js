import propTypes from 'prop-types';
import React, { Component } from 'react';
import calculate from '../logic/calculator';
import Table from './Table';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (data) => {
    this.setState((obj) => calculate(obj, data));
  };

  render() {
    const tableData = [
      [0],
      ['AC', '+/-', '%', `${String.fromCharCode(247)}`],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    const { next, operation, total } = this.state;
    const otherProps = {
      next,
      operation,
      total,
    };

    return <Table otherProps={otherProps} handleClick={this.handleClick} tableData={tableData} />;
  }
}

Calculator.prototypes = {
  otherProps: propTypes.instanceOf(Object).isRequired,
};
