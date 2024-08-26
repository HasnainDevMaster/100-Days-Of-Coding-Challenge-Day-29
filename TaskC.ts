// 100 Days Of Coding Challenge!

/** Question 87: Extracting a Substring:
Demonstrate how to extract the first 10 characters from a string.*/

//------------------------------------------------------------------

/**
 * Extracts the first 10 characters from a string.
 * @param str - The string to extract from.
 * @returns The first 10 characters of the string.
 */

// Function "extractFirst10Chars()"" to extract the first 10 characters from a string
function extractFirst10Chars(str: string): string {
    return str.substring(0, 10);
}

// log the result of the function "extractFirst10Chars()" to the console
const exampleString3 = "TypeScript is awesome!";
console.log(extractFirst10Chars(exampleString3)); // Output: TypeScript
