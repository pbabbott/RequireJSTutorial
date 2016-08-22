
// What should the name of this function be?
// Get_inputs_santize inputs_validate input_show result()
// There are only four lines of code where we calculate!
var caclulate = function () {

    var operator = $('#operationSelector').val();
    var input1 = parseInt($("#input1").val());
    var input2 = parseInt($('#input2').val());
    var result;

    switch (operator) {
        case '+':
            result = input1 + input2;
            break;

        case '-':
            result = input1 - input2;
            break;

        case '*':
            result = input1 * input2;
            break;

        case '/':
            if (input2 === 0) {
                $('.validationContainer').text('error! cannot divide by zero!');
            } else {
                result = input1 / input2;
            }
            break;
    }

    $('#result').text(result);

};


$('#calculateButton').click(function () {
    caclulate();
});