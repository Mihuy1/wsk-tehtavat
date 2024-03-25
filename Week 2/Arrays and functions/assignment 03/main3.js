const numbers = [];

let input = prompt('Enter a number (or "done" to finish):');

while (input != 'done') {
  if (parseInt(input) % 2 == 0) numbers.push(input);
  input = prompt('Enter a number (or "done" to finish):');
}

console.log('Even numbers:');
for (const number of numbers) {
  console.log(number);
}

console.log('Program complete.');
