const calculator = require('./calculator')

describe('Sum operator', () => {
    // test('x' , () => {
    //     expect(1).toBe(1);
    // })

    test('Sum 1 + 2 to equals 3', () => {
        var result  = calculator.sum(1,2);
        expect(result).toBe(3);
    });
    
    test('Sum 4 + 5 to equals 9', () => {
        var result  = calculator.sum(4,5);
        expect(result).toBe(9);
    });

});

describe('Substract operator', () => {

    test('Substract 4 - 1 to equals 3', () => {
        var result  = calculator.substract(4,1);
        expect(result).toBe(3);
    });
});