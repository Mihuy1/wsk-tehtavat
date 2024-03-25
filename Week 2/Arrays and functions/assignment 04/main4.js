const numbers = [5, 2, 10, 75, 62, 25, 99, 1];

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

console.log('Original array: ' + numbers);
console.log('Sorted array: ' + sortArray(numbers));
