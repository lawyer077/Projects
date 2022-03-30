var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevid = document.getElementById('buttonDevid');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert('opreation is unknown');
    }
    window.alert(result);
}

function onOperationButtonClick (eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevid];

var i;
for (i = 0; i < operationButtons.length; i ++) {
    var button = operationButtons[i];
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}
