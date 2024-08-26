"use strict";
// 100 Days Of Coding Challenge!
/** Question 85:Finding the Position of a Substring:
Write a function that locates the first occurrence of the word `code` within any given string and returns its position.*/
//------------------------------------------------------------------------------------------------------------------------
/**
 * Finds the position of the first occurrence of the word 'code' in a string.
 * @param str - The string to search within.
 * @returns The position of the first occurrence of 'code', or -1 if not found.
 */
// Function "findCodePosition()" to find the position of the word 'code' in a string
function findCodePosition(str) {
    return str.indexOf('code');
}
// log the position of the word 'code' in the string "Learn to code with TypeScript"
const position = findCodePosition("Learn to code with TypeScript");
console.log(position); // Output: 9
