// This file contains the code in relation to the tasks required under the section 'Exploring JavaScript Operators'

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let variable1
let variable2

// Task 2: Assign sample numeric values to the variables declared in Task 1.
a = 5;
b = 15;

console.log("Part 2: Exploring Operators");
console.log("Variable 'a':", a);
console.log("Variable 'b':", b);

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", a + b);
console.log("Difference:", b - a);
console.log("Product:", a * b);
console.log("Quootient:", b / a);
console.log("Exponent:", b ** a);
console.log("Remainder:", b % a);

// Task 4: Explore assignment operators and update the values of variables.
a = 2;
b = 4;

console.log(`Updated variable 'a': ${a}`);
console.log(`Updated variable 'b': ${b}`);

// Task 5: Use comparison operators to compare the values of variables.
let equalTo = a == b;
let greaterThan = a > b;
let notEqualTo = a != b;

console.log("Is 'a' equal to 'b'?", equalTo);
console.log("Is 'a' greater than 'b'?", greaterThan);
console.log("Is 'a' not equal to 'b'?", notEqualTo);

//Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = (a > 0 && b > 0);
let isEven = (a % 2 === 0 || b % 2 === 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);