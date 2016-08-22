var getFormValues = function () {
    return {
        input1: $("#input1").val(),
        input2: $("#input2").val(),
        operator: $('#operationSelector').val()
    };
};

var santizeFormValues = function (formValues) {
    formValues.input1 = parseInt(formValues.input1);
    formValues.input2 = parseInt(formValues.input2);

    if (formValues.input2 === 0 && formValues.operator == '/') {
        showErrorMessage('error! cannot divide by zero!');
        return undefined;
    }

    return formValues;
};

var showErrorMessage = function (message) {
    $('.validationContainer').text(message);
};

var showResult = function (message) {
    $('#result').text(message);
};

var add = function (a, b) {
    return a + b;
};

var subtract = function (a, b) {
    return a - b;
};

var multiply = function (a, b) {
    return a * b;
};

var divide = function (a, b) {
    return a / b;
};

var getOperationHandler = function (operator) {
    switch (formValues.operator) {
        case '+':
            return add;
        case '-':
            return subtract;

        case '*':
            return multiply;

        case '/':
            return divide;

        default:
            throw new Error('Invalid operator encountered');
    }
};

var caclulate = function () {
    var formValues = getFormValues();
    if (santizeFormValues(formValues)) {
        var operation = getOperationHandler(formValues.operator);
        var result = operation(formValues.input1, formValues.input2);
        showResult(result);
    }
};

$('#calculateButton').click(function () {
    caclulate();
});