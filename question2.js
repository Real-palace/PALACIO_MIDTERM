// Function to reverse a given string
function reverseString(str) {
    // Convert the string into an array of characters using split('')
    // Reverse the array using reverse()
    // Join the reversed array back into a string using join('')
    return str.split('').reverse().join('');
}

// Test the function by passing the string "hello" and logging the output
console.log(reverseString("hello")); // Expected output: "olleh"
