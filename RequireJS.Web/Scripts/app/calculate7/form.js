define([
    'jquery',
    'modules.calculator'
], function ($, Calculator) {

    function CalculatorForm() {
        var form = this;
        var calculator = new Calculator();
        var calculateButton = $('#calculateButton');

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

        var caclulate = function () {
            var formValues = getFormValues();
            if (santizeFormValues(formValues)) {
                var operation = calculator.getOperationHandler(formValues.operator);
                var result = operation(formValues.input1, formValues.input2);
                showResult(result);
            }
        };

        form.init = function () {
            $('#calculateButton').click(function () {
                caclulate();
            });
        };
    };

    var calculatorForm = new CalculatorForm();
    calculatorForm.init();
});