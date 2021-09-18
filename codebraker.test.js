const codebreaker = require('./codebreaker')

test('Empty ("")', () => {
    expect(codebreaker.guess(5678)).toBe('');
});
describe('Right digits wrong place', () => {
    test('All - ("----")', () => {
        expect(codebreaker.guess(4321)).toBe('----');
    });
    test('3 right digits wrong place ("---")', () => {
        expect(codebreaker.guess(5321)).toBe('---');
    });
    test('2 right digits wrong place ("--")', () => {
        expect(codebreaker.guess(5621)).toBe('--');
    });
    test('1 right digit wrong place ("-")', () => {
        expect(codebreaker.guess(5671)).toBe('-');
    });
});

describe('Right digits right place', () => {
    test('All X ("XXXX")', () => {
        expect(codebreaker.guess(1234)).toBe('XXXX');
    });
    test('3 right place ("XXX")', () => {
        expect(codebreaker.guess(5234)).toBe('XXX');
    });
    test('2 right place ("XX")', () => {
        expect(codebreaker.guess(5634)).toBe('XX');
    });
    test('1 right place ("X")', () => {
        expect(codebreaker.guess(5674)).toBe('X');
    });

});

describe('Combinations', () => {
    test('2 right place 2 wrong place ("XX--")', () => {
        expect(codebreaker.guess(1243)).toBe('XX--');
    });

    test('2 right place 2 wrong place -interspersed- ("XX--")', () => {
        expect(codebreaker.guess(1324)).toBe('XX--');
    });

    
    // XX--
    // X---
    // XX-
    // X--
    // X-
    

});