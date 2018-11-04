var useCalculator = prompt ('Hi, do you want to use the calculator?');

if (useCalculator === "yes") {
    var operator= prompt("what kind of math operation do you want ((+, -, /, *, cos, log, %)) ?");
    switch(operator) {
        case '+':
            sumValues();
            alert ('Thank you for using this calculator');
            break;
        case '-':
            subValues();
            alert ('Thank you for using this calculator');
            break;
        case '/':
            divValues();
            alert ('Thank you for using this calculator');
            break;
        case '*':
            mulValues();
            alert ('Thank you for using this calculator');
            break;
        case 'cos':
            cosValues();
            alert ('Thank you for using this calculator');
            break;
        case 'log':
            logValues();
            alert ('Thank you for using this calculator');
            break;
        case '%':
            restValues();
            alert ('Thank you for using this calculator');
            break;
        default:
            alert ("We're sorry but we don't have that operation");
    }
} else if (useCalculator === "no") {
    alert("See you later alligator");
} else {
    alert("We don't understand what you mean dawg, say yes or no please");
}

function sumValues() {
    var num1 = prompt ('number 1?');
    var num2 = prompt ('number 2?');
    alert ('The result of your operation is ' + (+num1 + +num2));
}

function subValues() {
    var num1 = prompt ('number 1?');
    var num2 = prompt ('number 2?');
    alert ('The result of your operation is ' + (+num1 - +num2));

}

function divValues() {
    var num1 = prompt ('number 1?');
    var num2 = prompt ('number 2?');
    alert ('The result of your operation is ' + (+num1 / +num2));
}

function mulValues() {
    var num1 = prompt ('number 1?');
    var num2 = prompt ('number 2?');
    alert ('The result of your operation is ' + (+num1 * +num2));
}

function cosValues() {
    var num = prompt ('number?');
    alert ('The result of your operation is ' + Math.cos(num).toFixed(3));
}

function logValues() {
    var num = prompt ('number?');
    alert ('The result of your operation is ' + Math.log(num).toFixed(3));
}

function restValues() {
    var num1 = prompt ('number 1?');
    var num2 = prompt ('number 2?');
    alert ('The result of your operation is ' + (+num1 % +num2));
}