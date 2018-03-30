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

describe('spies',function(){
    it('create an spy and setup return value', function(){
        var cal = new Calculator();
        var spy = spyOn(cal,'addNumbers').and.returnValue(5)

        var result = cal.addNumbers(1,2);

        expect(result).toBe(5);
    });

    it('create an spy and rewrite function', function(){
        var cal = new Calculator();
        var spy = spyOn(cal,'addNumbers').and.callFake(function(){
            return 10;
        });

        var result = cal.addNumbers(1,2);

        expect(result).toBe(10);
    });

    it('create an spy and execute the original implementation', function(){
        var cal = new Calculator();
        var spy = spyOn(cal,'addNumbers').and.callThrough();

        var result = cal.addNumbers(1,2);

        expect(result).toBe(3);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

describe('spies & mocking',function(){
    it('Creating a mock object and setup return values',function(){
        var spy = jasmine.createSpyObj('calculator',['addNumbers','divideNumbers']);
        spy.addNumbers.and.returnValue(2);
        spy.divideNumbers.and.returnValue(4);

        expect(spy.addNumbers()).toBe(2);
        expect(spy.divideNumbers()).toBe(4);
    });
});