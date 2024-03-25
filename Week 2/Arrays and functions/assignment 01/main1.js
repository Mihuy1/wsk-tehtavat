// Create an array fruits
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Display the contents of the array in console
console.log(fruits);

// Calculate and display length of the array
console.log(`Length of fruit array: ${fruits.length}`);

// Access and display the element at index 2
console.log(`Fruit at index 2: ${fruits[2]}`);

// Access and display the last element in the fruits array
console.log(`Last fruit in fruits array: ${fruits[fruits.length - 1]}`);

// Create an empty array called vegetables
const vegetables = [];

// Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array
for (let i = 0; i < 3; i++) {
  vegetables.push(prompt(`Enter vegetable ${i + 1}: `));
}

// Display the contents of vegetables array
console.log(`Vegetables array: ${vegetables} `);

// Length of the vegetables array
console.log(`Length of vegetables array: ${vegetables.length}`);
