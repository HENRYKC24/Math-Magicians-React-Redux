import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  try {
    if (operation === '÷') {
      return one.div(two).toString();
    }
    if (operation === '%') {
      return one.mod(two).toString();
    }
  } catch (e) {
    return 'error: can not divide by zero';
  }
  throw Error(`Unknown operation '${operation}'`);
}
