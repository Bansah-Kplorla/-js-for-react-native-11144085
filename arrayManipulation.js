// Task 1: processArray function
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square if even
        } else {
            return num * 3; // Triple if odd
        }
    });
}

// Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if number is even
        } else {
            return str.toLowerCase(); // Lowercase if number is odd
        }
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const strings = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(processedNumbers); // [3, 4, 9, 16, 15]
console.log(formattedStrings); // ["apple", "BANANA", "cherry", "DATE", "elderberry"]
