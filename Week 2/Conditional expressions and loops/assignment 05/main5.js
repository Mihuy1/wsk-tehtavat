function calculateSum() {
  const number = parseInt(prompt('Enter number:'));
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  document.querySelector('#result').textContent = `Sum: ${sum}`;
}

calculateSum();
