function greet(age, gender, name) {
    if (age >= 40 && gender === "male") {
        console.log('Hello Mr. ' + name);
    } else if (age >= 40 && gender === "female") {
        console.log('Hello Ms. ' + name);
    } else if (age < 40 && gender === "male") {
        console.log('Hey ' + name + ' my boy');
    } else {
        console.log('Hey ' + name + ' my boy');
    } 
}

let greetAnAdultMale = greet.bind(null, 42, 'male')
let greetAYoungster = greet.bind(null, 30)

greetAnAdultMale('Pedro')
greetAYoungster('male', 'Miguel')