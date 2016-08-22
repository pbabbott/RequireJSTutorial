var getFormValues = function () {
    return {
        input1: parseInt($("#input1").val()),
        input2: parseInt($("#input2").val()),
        operator: $('#operationSelector').val()
    };
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

var caclulate = function () {
    var formValues = getFormValues();
    var result;

    switch (formValues.operator) {
        case '+':
            result = add(formValues.input1, formValues.input2);
            break;

        case '-':
            result = subtract(formValues.input1, formValues.input2);
            break;

        case '*':
            result = multiply(formValues.input1, formValues.input2);
            break;

        case '/':
            if (formValues.input2 === 0) {
                showErrorMessage('error! cannot divide by zero');
            } else {
                result = divide(formValues.input1, formValues.input2);
            }
            break;
    }

    showResult(message);
};

$('#calculateButton').click(function () {
    caclulate();
});