function Calculator() {
    var calc = this;
    calc.add = function (a, b) {
        return a + b;
    };

    calc.subtract = function (a, b) {
        return a - b;
    };

    calc.multiply = function (a, b) {
        return a * b;
    };

    calc.divide = function (a, b) {
        return a / b;
    };

    calc.getOperationHandler = function (operator) {
        switch (operator) {
            case '+':
                return calc.add;
            case '-':
                return calc.subtract;

            case '*':
                return calc.multiply;

            case '/':
                return calc.divide;

            default:
                throw new Error('Invalid operator encountered');
        }
    };
};