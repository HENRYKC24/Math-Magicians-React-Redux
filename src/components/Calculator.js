import React, { Component } from 'react';
import Table from './Table';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tableData = [
      [0],
      ['AC', '+/-', '%', `${String.fromCharCode(247)}`],
      [7, 8, 9, `${String.fromCharCode(215)}`],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, `${String.fromCharCode(183)}`, '='],
    ];

    return (
      <Table tableData={tableData} />
    );
  }
}
