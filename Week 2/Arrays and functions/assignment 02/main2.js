const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(parseInt(prompt(`Enter number:`)));
}

console.log(numbers);

const n = parseInt(prompt(`Enter number to check if array contains it:`));

if (numbers.includes(n)) console.log(`The number ${n} is in the array`);
else console.log(`The number ${n} was not found in the array`);

numbers.pop(numbers.length - 1);
console.log('Removed last number from array');
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(`Sorted array`);
console.log(numbers);
