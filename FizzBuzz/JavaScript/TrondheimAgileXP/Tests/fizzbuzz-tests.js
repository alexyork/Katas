describe("FizzBuzz", function () {

    it("should print fizz for multiples of 3", function () {
        var multiplesOfThree = [3, 6, 18];
        for (var i = 0; i < multiplesOfThree.length; i++) {
            var result = fizzBuzz.getResult(multiplesOfThree[i]);
            expect(result).toEqual("fizz");
        }
    });

    it("should print buzz for multiples of 5", function () {
        var multiplesOfFive = [5, 10, 25];
        for (var i = 0; i < multiplesOfFive.length; i++) {
            var result = fizzBuzz.getResult(multiplesOfFive[i]);
            expect(result).toEqual("buzz");
        }
    });

    it("should print fizzbuzz for multiples of 15", function () {
        var multiplesOfFifteen = [15, 30, 90];
        for (var i = 0; i < multiplesOfFifteen.length; i++) {
            var result = fizzBuzz.getResult(multiplesOfFifteen[i]);
            expect(result).toEqual("fizzbuzz");
        }
    });

    it("should print the number for non-multiples of 3 and 5", function () {
        var nonMultiples = [1, 2, 7, 17];
        for (var i = 0; i < nonMultiples.length; i++) {
            var result = fizzBuzz.getResult(nonMultiples[i]);
            expect(result).toEqual(nonMultiples[i].toString());
        }
    });

});