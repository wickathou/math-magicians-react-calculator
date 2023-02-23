import operate from "../logic/operate";

describe('Operate tests for first value second value and operate value ',() => {
    it('checking for addition should return 20 when 10 + 10',() => {

        expect(operate(10,10,'+')).toMatch('20');
    });
    it('checking for subtraction should return 5 when 10 - 5',() => {

        expect(operate(10,5,'-')).toMatch('5');
    });
    it('checking for division should return 2 when 10 / 5',() => {

        expect(operate(10,5,'÷')).toMatch('2');
    });
    it('checking for multiply should return 20 when 10 * 2',() => {

        expect(operate(10,2,'x')).toMatch('20');
    });
    it('checking for modulo should return 0 when 10 % 2',() => {

        expect(operate(10,2,'%')).toMatch('0');
    });
});