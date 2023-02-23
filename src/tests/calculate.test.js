import calculate from '../logic/calculate';

describe('calculate tests for different button inputs', () => {
  it('should return an object with all null properties', () => {
    const initial = {
      total: '1',
      next: null,
      operation: null,
    };
    expect(calculate(initial, 'AC')).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return an object with a next of 1', () => {
    const initial = {
      total: '1',
      next: null,
      operation: null,
    };
    expect(calculate(initial, '1')).toMatchObject({
      total: null,
      next: '1',
    });
  });

  it('should return an object with a next of 11', () => {
    const initial = {
      total: null,
      next: '1',
      operation: null,
    };
    expect(calculate(initial, '1')).toMatchObject({
      total: null,
      next: '11',
    });
  });

  it('should return an object with a next of 11 and operation +', () => {
    const initial = {
      total: null,
      next: '11',
      operation: null,
    };
    expect(calculate(initial, '+')).toMatchObject({
      total: '11',
      next: null,
      operation: '+',
    });
  });

  it('should return an object with a next of 11, total 11 and operation +', () => {
    const initial = {
      total: '11',
      next: null,
      operation: '+',
    };
    expect(calculate(initial, '11')).toMatchObject({
      total: '11',
      next: '11',
      operation: '+',
    });
  });

  it('should return an object with a total 22', () => {
    const initial = {
      total: '11',
      next: '11',
      operation: '+',
    };
    expect(calculate(initial, '=')).toMatchObject({
      total: '22',
      next: null,
      operation: null,
    });
  });
});
