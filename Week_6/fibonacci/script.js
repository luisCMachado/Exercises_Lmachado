let retVal = prompt("run loop?");
let previousNum1 = 1, previousNum2 = 0, num = 0;

if (retVal == 'yes') {
    for(var i = 1; i <= 60; i++) {
        num = previousNum1 + previousNum2;
        previousNum1 = previousNum2;
        previousNum2 = num;
        alert(num);
    }
} else {
    alert('Enter yes to run fibonacci');
}