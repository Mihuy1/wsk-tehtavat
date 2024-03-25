const numbers1 = [5, 2, 8, 1, 9];
const numbers2 = [5, 2, 8, 1, 9];

function sortArray(array, order) {
  if (order == 'asc') return array.sort((a, b) => a - b);
  else if (order == 'desc') return array.sort((a, b) => b - a);
}

console.log(sortArray(numbers1, 'asc')); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers2, 'desc')); // Output: [9, 8, 5, 2, 1]
