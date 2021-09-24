import operate from '../logic/operate';

describe('Testing the operate function', () => {
  it('Expects 10, 2 and + to be 12', () => {
    const op1 = operate('10', '2', '+');
    expect(op1).toBe('12');
  });

  it('Expects 0, 0 and + to be 0', () => {
    const op1 = operate('0', '0', '+');
    expect(op1).toBe('0');
  });

  it('Expects 22, 2, - to be 20', () => {
    const op1 = operate('22', '2', '-');
    expect(op1).toBe('20');
  });

  it('Expects 7, 2, x to be 14', () => {
    const op1 = operate('7', '2', 'x');
    expect(op1).toBe('14');
  });

  it('Expects 22, 2, % to be 0', () => {
    const op1 = operate('22', '2', '%');
    expect(op1).toBe('0');
  });

  it('Expects -10, -3, - to be 10', () => {
    const op1 = operate('-10', '-3', '-');
    expect(op1).toBe('-7');
  });
});