// In this challenge you’ll have to make the sum of 5 numbers.
// Use bind to reuse that function in order to add more numbers as a parameter (one by one) 
// Add parameters to the functions until you have the five
// Only in the end you are allowed to run the resulting function and add the five.

function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}

let sumA = sum.bind(null, 10)
let sumB = sumA.bind(null, 20)
let sumC = sumB.bind(null, 30)
let sumD = sumC.bind(null, 40)
let sumE = sumD.bind(null, 50)

sumE()