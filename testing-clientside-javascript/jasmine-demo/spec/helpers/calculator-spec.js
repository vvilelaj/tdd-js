var Calculator = require('../../scripts/helpers/calculator');

describe('Given a calculator instance',function(){
    var calc = new Calculator();
    it('Should return 3 when invokes addNumber method with 1 and 2',function(){
        var result = calc.addNumbers(1,2);
        expect(result).toBe(3);
    });
});