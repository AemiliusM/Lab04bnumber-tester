import { isEven, isOdd } from '../is-even.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test a function', (expect) => {
    
    const expected = true;
    
   
    const actual = isEven(300); // use your function here

    
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    
    const expected = true;
    
   
    const actual = isOdd(55); // use your function here

    
    expect.equal(actual, expected);
});
