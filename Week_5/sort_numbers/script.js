var num1 = prompt('Number 1?');
var num2 = prompt('Number 2?');
var num3 = prompt('Number 3?');

if (Number(num1) > Number(num2) && Number(num1) >Number(num3) ) {

    if (Number(num2) > Number(num3)) {

        alert('The order is '+ num1 + ', ' + num2 + ', ' + num3);
    } else {
        alert('The order is '+ num1 + ', ' + num3 + ', ' + num2);
    }
} else if (Number(num2) > Number(num1) && Number(num2) > Number(num3)) {

    if ( Number(num1) > Number(num3)) {

        alert('The order is '+ num2 + ', ' + num1 + ', ' + num3);
    } else {
        alert('The order is '+ num2 + ', ' + num3 + ', ' + num1);
    }
} else  if  (Number(num3) > Number(num1) && Number(num3) >Number(num2) ){

    if (Number(num1) > Number(num2)) {
        
        alert('The order is '+ num3 + ', ' + num1 + ', ' + num2);
    } else {
        alert('The order is '+ num3 + ', ' + num2 + ', ' + num1);
    }
} else {
    alert('The order is '+ num1 + ', ' + num2 + ', ' + num3);
}