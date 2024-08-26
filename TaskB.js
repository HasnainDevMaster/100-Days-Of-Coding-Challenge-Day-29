"use strict";
// 100 Days Of Coding Challenge!
/** Question 86: Checking for Text Presence:
Create a function that checks if the word `JavaScript` is present in a given string. It should return `true` if found, otherwise `false`.*/
//-----------------------------------------------------------------------------------------------------------------------------------------
/**
 * Checks if the word 'JavaScript' is present in a string.
 * @param str - The string to check.
 * @returns True if 'JavaScript' is found, otherwise false.
 */
// Function "containsJavaScript()" takes a string as a parameter and returns a boolean value.
function containsJavaScript(str) {
    return str.includes('JavaScript');
}
// log the result of calling containsJavaScript() with exampleString1 and exampleString2
const exampleString2 = "I love JavaScript and TypeScript.";
console.log(containsJavaScript(exampleString2)); // Output: true
