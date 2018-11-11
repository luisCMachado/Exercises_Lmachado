let array = [];

while (Infinity) {
  let name = prompt('name?'); if (name == 'terminate*') { break };
  let age = parseFloat(prompt('age?')); if (age == 'terminate*') { break };
  let profession = prompt('profession?'); if (profession == 'terminate*') { break };
  array.push({ 'name': name, 'age': age, 'profession': profession });
}

if (array.length == 0) {
  alert('You did not insert any person in the list');
  alert('Goodbye');
} else {
  let minId, tempArray;
  let result = '';
  for (let i = 0; i < array.length; i++) {
    minI = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].age < array[minI].age) {
        minI = j;
      }
    }
    tempArray = array[i];
    array[i] = array[minI];
    array[minI] = tempArray;
    result += (array[i].name + ' - ' + array[i].age);
    if (i !== array.length - 1) { result += ", " }
  }
  alert('list: ' + result);
  alert('Goodbye');
}