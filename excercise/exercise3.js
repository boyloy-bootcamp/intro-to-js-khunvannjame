/**
 
Exercise 3: Convert Celsius to Fahrenheit
Problem Statement:

Write a function celsiusToFahrenheit that takes a temperature in Celsius and converts it to Fahrenheit. 
The formula is: F = C * 9/5 + 32.


Example:
let celsius = 25;

let fahrenheit = celsiusToFahrenheit(celsius);

console.log(fahrenheit); // Output: 77
 */

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(fahrenheit);
 
module.exports = celsiusToFahrenheit;
