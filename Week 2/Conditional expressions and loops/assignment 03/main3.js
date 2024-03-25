function typeOfTriangle() {
  const side1 = +prompt('Enter side 1');
  const side2 = +prompt('Enter side 2');
  const side3 = +prompt('Enter side 3');

  const triangle = `The triangle is an: `;

  if (side1 === side2 && side2 === side3) {
    console.log('Equilateral triangle');
    document.querySelector('#result').textContent =
      `${triangle} equilateral triangle`;
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log('Isosceles triangle');
    document.querySelector('#result').textContent =
      `${triangle} isosceles triangle`;
  } else {
    console.log('Scalene triangle');
    document.querySelector('#result').textContent =
      `${triangle} scalene triangle`;
  }
}

typeOfTriangle();
