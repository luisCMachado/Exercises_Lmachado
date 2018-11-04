
var numbersArray = prompt ('Entre sequence of numbers');
var resultado = '';
resultado += numbersArray[0];

console.log(resultado);
for (var i=0; i < numbersArray.length-1; i++) {

    if (numbersArray[i] % 2 == 0 && numbersArray[i+1] % 2 == 0) {
        resultado += '-'+ numbersArray[i+1];

    } else if (numbersArray[i] % 2 != 0  && numbersArray[i+1] % 2 != 0) {
        resultado += '#'+ numbersArray[i+1];
     } else { 
         resultado += numbersArray[i+1];

     }
}

alert(resultado);
