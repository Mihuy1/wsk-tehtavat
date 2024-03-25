function grade() {
  const grade = parseInt(prompt('Enter grade'));

  const pElement = document.querySelector('#result');

  if (grade > 0 && grade <= 39) {
    pElement.textContent = '0';
  } else if (grade >= 40 && grade <= 51) {
    pElement.textContent = '1';
  } else if (grade >= 52 && grade <= 63) {
    pElement.textContent = '2';
  } else if (grade >= 64 && grade <= 75) {
    pElement.textContent = '3';
  } else if (grade >= 76 && grade <= 87) {
    pElement.textContent = '4';
  } else if (grade >= 88 && grade <= 100) {
    pElement.textContent = '5';
  } else {
    pElement.textContent = 'Incorrect score!';
  }
}

grade();
