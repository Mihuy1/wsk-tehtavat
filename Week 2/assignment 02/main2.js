function calculateDistance() {
  const x = parseFloat(prompt('Enter first x coordinates:'));
  const x2 = parseFloat(prompt('Enter second x coordinates:'));
  const y = parseFloat(prompt('Enter first y coordinates:'));
  const y2 = parseFloat(prompt('Enter second y coordinates:'));

  const distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
  console.log(distance);

  document.querySelector('#result').textContent =
    `Distance between the two points: ${distance}`;
}

calculateDistance();
