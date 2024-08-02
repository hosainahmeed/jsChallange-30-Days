// // Day 1

// // Task 1


// var number = 23;
// console.log(number);

// // Task 2

// let string = "this is a string";
// console.log(string);

// // Task 3

// const bool = true;
// console.log(bool);

// // Task 4

// var number = 20;
// var name = "Hosain Ali";
// var sunHot = true;
// var object = [];
// var arr = [2, 3, 4, 5];
// console.log(number, name, sunHot, object, arr);
// console.log(typeof(number));
// console.log(typeof(name));
// console.log(typeof(sunHot));
// console.log(typeof(object));
// console.log(typeof(arr));

// // Task 5

// let value = 21;
// // console.log(value);
// value = 20;
// console.log(value);

// // Day 2

// // Task 1

// let number1 = 10;
// let number2 = 12;

// let sum = number1 + number2;
// console.log(sum);

// // Task 2

// function subtractNumber(a, b) {
//   return a - b;
// }

// let result = subtractNumber(12, 10);
// console.log(result);

// // Task 3

// function multiplyNumbers(a, b) {
//   return a * b;
// }

// result = multiplyNumbers(12, 10);
// console.log(result);

// // Task 4

// result = subtractNumber(12, 4);
// console.log(result);

// // Task 5

// function findRemainder(dividend, divisor) {
//   if (divisor === 0) {
//     console.log("Divisor cannot be zero.");
//     return;
//   }

//   let remainder = dividend % divisor;
//   console.log(`The remainder when ${dividend} is divided by ${divisor} is: ${remainder}`);
// }

// let dividend = 10;
// let divisor = 3;
// findRemainder(dividend, divisor);

// // Task 6

// function addNumber(number) {
//   return number + 10;
// }

// result = addNumber(12);
// console.log(result);

// // Task 7

// function subtractFromNumber(number) {
//   return number - 10;
// }

// result = subtractFromNumber(12);
// console.log(result);

// // Task 8

// function compareNumber(firstNumber, secondNumber) {
//   if (firstNumber > secondNumber) {
//     console.log(`First number is bigger: ${firstNumber}`);
//     return firstNumber;
//   } else if (firstNumber < secondNumber) {
//     console.log(`Second number is bigger: ${secondNumber}`);
//     return secondNumber;
//   }
// }

// result = compareNumber(12, 10);
// console.log(result);

// Task 9

// function compareNumber(firstNumber, secondNumber) {
//   if (firstNumber >= secondNumber) {
//     console.log(`First number is bigger: ${firstNumber}`);
//     return firstNumber;
//   } else if (firstNumber <= secondNumber) {
//     console.log(`Second number is bigger: ${secondNumber}`);
//     return secondNumber;
//   }
// }

// result = compareNumber(12, 110);
// console.log(result);

// Task 1
0
// function compareNumbers(number1, number2) {
//   console.log(`${number1} == ${number2} is ${number1 == number2}`);
//   console.log(`${number1} === ${number2} is ${number1 === number2}`);
// }

// let num1 = 5;
// let num2 = '5';

// compareNumbers(num1, num2);

// Task 1
1
// function usingAndCompare(num1, num2) {
//   let greater = num1 > num2;
//   let multiply = num1 * num2;
//   if (greater && multiply) {
//     console.log(`${greater} ==== ${multiply}`);
//   }
// }

// num1 = 15;
// num2 = 10;

// usingAndCompare(num1, num2);

// // Task 1
2
// function usingOrCompare(num1, num2) {
//   let greater = num1 > num2;
//   let multiply = num1 * num2;
//   if (greater || multiply) {
//     console.log(`${greater} ==== ${multiply}`);
//   }
// }

// num1 = 5;
// num2 = 10;

// usingOrCompare(num1, num2);

// // Task 1
3
// function usingNotCompare(num1, num2) {
//   let greater = num1 < num2;
//   if (!greater) {
//     console.log(`${greater}`);
//   } else {
//     console.log(true);
//   }
// }

// num1 = 5;
// num2 = 10;

// usingNotCompare(num1, num2);

// // Task 1
4
// function checkNumber(number) {
//   let result = (number >= 0) ? "The number is positive" : "The number is negative";
//   console.log(result);
// }

// checkNumber(10);
// checkNumber(-5);
// checkNumber(0);

// // Day 3

// // Task 1

// function numberChecker(number) {
//   if (number == 0) {
//     console.log('Number is equal to 0');
//   } else if (number < 0) {
//     console.log("Number is negative");
//   } else {
//     console.log('Number is positive');
//   }
// }

// numberChecker(12);
// numberChecker(-5);
// numberChecker(0);

// // Task 2

// function adultPersonChecker(age) {
//   if (age >= 18) {
//     console.log(`He is an adult person and is ${age} years old.`);
//   } else {
//     console.log(`He is underage and is ${age} years old.`);
//   }
// }

// adultPersonChecker(22);
// adultPersonChecker(14);


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

