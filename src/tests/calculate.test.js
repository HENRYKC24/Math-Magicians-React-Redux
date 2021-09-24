import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';

describe('calculate function can add numbers', () => {
  let calcObject = {
    total: 0,
    operation: null,
    next: null,
  };

  it('Expects 10 + 10 to equal 20', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(container.querySelector('.divAC'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(container.querySelector('.result').innerHTML).toBe('20');
  });

  it('Expects -30 + 8 to be -22', () => {
    const pressFirstNumber = calculate(calcObject, '3');
    calcObject = { ...calcObject, ...pressFirstNumber };

    const pressZero = calculate(calcObject, '0');
    calcObject = { ...calcObject, ...pressZero };

    const pressMinusPlus = calculate(calcObject, '+/-');
    calcObject = { ...calcObject, ...pressMinusPlus };

    const pressPlus = calculate(calcObject, '+');
    calcObject = { ...calcObject, ...pressPlus };

    const press8 = calculate(calcObject, '8');
    calcObject = { ...calcObject, ...press8 };

    const pressEqual = calculate(calcObject, '=');
    calcObject = { ...calcObject, ...pressEqual };

    expect(calcObject.total).toBe('-22');
  });

  it('Expects 5 divided by 0 to throw error', () => {
    const pressFirstNumber = calculate(calcObject, 'AC');
    calcObject = { ...calcObject, ...pressFirstNumber };

    const press5 = calculate(calcObject, '5');
    calcObject = { ...calcObject, ...press5 };

    const pressDivide = calculate(calcObject, '÷');
    calcObject = { ...calcObject, ...pressDivide };

    const press0 = calculate(calcObject, '0');
    calcObject = { ...calcObject, ...press0 };
    const pressEqualSign = calculate(calcObject, '=');

    calcObject = { ...calcObject, ...pressEqualSign };

    expect(calcObject.total).toBe('error: can not divide by zero');
  });
});
