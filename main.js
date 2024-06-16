function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var inputValue = document.getElementById('display').value;
        var result = safeResult(inputValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function safeResult(input) {
    var validInput = input.match(/^[\d\+\-\*\/\(\) .]+$/);
    if (validInput) {
        return Function('"use strict";return (' + input + ')')();
    } else {
        throw new Error('Invalid input');
    }
}

