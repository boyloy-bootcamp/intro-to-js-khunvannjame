/**
 * Exercise 4: Check if a Number is Even
Problem Statement:

Write a function isEven that takes a number as input and returns true if it's even and false if it's odd.

Example

let num1 = 10;
let num2 = 7;

let even1 = isEven(num1);
let even2 = isEven(num2);

console.log(even1); // Output: true
console.log(even2); // Output: false

 */

function isEven(number) {
  
  return number % 2 === 0;
}

let number = 4;
let result = isEven(number);
console.log(result); // Output: true

number = 7;
result = isEven(number);
console.log(result);

module.exports = isEven;
