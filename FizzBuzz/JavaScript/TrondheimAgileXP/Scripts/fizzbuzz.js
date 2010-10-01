var fizzBuzz = function () {

    var getResult = function (number) {

        if (isFizzBuzz(number)) return "fizzbuzz";

        if (isFizz(number)) return "fizz";

        if (isBuzz(number)) return "buzz";

        return number.toString();
    };

    var isFizzBuzz = function (number) {
        return number % 15 == 0;
    };

    var isFizz = function (number) {
        return number % 3 == 0;
    };

    var isBuzz = function (number) {
        return number % 5 == 0;
    };

    return {
        getResult: getResult
    };

} ();