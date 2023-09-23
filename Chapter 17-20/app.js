//Question No 1

// var multiArray = [];
// console.log("Multidimensional Array:");
// console.log(multiArray);

//Question No 2

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log("Matrix:");
// for (var i = 0; i < matrix.length; i++) {
//     console.log(matrix[i].join(" "));
// }

//Question No 3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Question No 4

// var tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
// var tableLength = parseInt(prompt("Enter length multiplication table:"));
// console.log("Multiplication Table for " + tableNumber + ":");
// console.log("Length : " + tableLength );

// for (var i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     console.log(tableNumber + " x " + i + " = " + result);
// }

//Question No 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// console.log("\n")
// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at index " + i + " is " + fruits[i]);
// }

//Question No 6

// var outputDiv = document.getElementById("output");

// var countingSeries = "Counting: ";
// for (var i = 1; i <= 15; i++) {
//     countingSeries += i;
//     if (i < 15) {
//         countingSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + countingSeries + "</p>";

// var reverseCountingSeries = "Reverse counting: ";
// for (var i = 10; i >= 1; i--) {
//     reverseCountingSeries += i;
//     if (i > 1) {
//         reverseCountingSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + reverseCountingSeries + "</p>";

// var evenSeries = "Even: ";
// for (var i = 0; i <= 20; i += 2) {
//     evenSeries += i;
//     if (i < 20) {
//         evenSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + evenSeries + "</p>";

// var oddSeries = "Odd: ";
// for (var i = 1; i <= 19; i += 2) {
//     oddSeries += i;
//     if (i < 19) {
//         oddSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + oddSeries + "</p>";

// var series = "Series: ";
// for (var i = 2; i <= 20; i += 2) {
//     series += i + "k";
//     if (i < 20) {
//         series += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + series + "</p>";

//Question No 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// userInput = userInput.toLowerCase();
// var itemFound = false;

// var foundIndex = -1;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         itemFound = true;
//         foundIndex = i;
//         break;
//     }
// }
// if (itemFound) {
//     console.log("'" + userInput + "' is available at index " + foundIndex + ".");
// } else {
//     console.log("We are sorry. " + userInput + " is not available in our bakery.");
// }

//Question No 8

// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// console.log("Array items: " + A.join(", "));
// console.log("The largest number is " + largestNumber);

//Question No 9

// var A = [24, 53, 78, 91, 12];
// var smallestNumber = A[0]; // Assume the first number is the smallest
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }
// console.log("Array items: " + A.join(", "));
// console.log("The smallest element is " + smallestNumber);

//Question No 10

// for (var i = 1; i <= 20; i++) {
//     var multipleOf5 = i * 5;
//     console.log(multipleOf5);
// }
