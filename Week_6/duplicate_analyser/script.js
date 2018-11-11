let numbersArray = prompt('numbers').split('');

numbersArray.sort((a,b) => (a - b));

alert ('List of numbers:');

for (let i=0; i < numbersArray.length; i++) {
   let count=0;
    for (let j=0; j <= numbersArray.length; j++) {
        if (numbersArray[i] == numbersArray[j]) {
          count++;
        }
    }
    if (numbersArray[i] !== numbersArray[i+1] ) {
        alert (numbersArray[i]+ ': ' + count + ' times')
    }
}