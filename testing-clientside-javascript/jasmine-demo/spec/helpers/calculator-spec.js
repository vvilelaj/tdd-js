describe('Given a calculator instance',function(){
    var calc;

    beforeEach(function(){
        calc = new Calculator();
    });

    afterEach(function(){
        calc = null;
    });

    it('Should return 3 when invokes addNumber method with 1 and 2',function(){
        var result = calc.addNumbers(1,2);
        expect(result).toBe(3);
    });

    it('Should return 2 when invokes divideNumber method with 6 and 3',function(){
        var result = calc.divideNumbers(6,3);
        expect(result).toBe(2);
    });

    it('Should return 0.333 when invokes divideNumber method with 3 and 1',function(){
        var result = calc.divideNumbers(1,3);
        expect(result).toBeGreaterThanOrEqual(0.33);
        expect(result).toBeLessThanOrEqual(0.34);
    });
});